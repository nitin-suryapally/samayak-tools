// app/actions/createLead.ts
"use server";

export type LeadResult =
  | { ok: true; data: any }
  | {
      ok: false;
      message: string;
      status?: number;
      statusText?: string;
      contentType?: string;
      body?: string;
    };

export async function createLead(
  _prev: LeadResult | null,
  formData: FormData
): Promise<LeadResult> {
  try {
    // Fixed as required
    const CostCenterID = "86";
    const Owner = "Admin";

    // Build ONLY the allowed fields in the required shape
    const requestJson = {
      SetCostCenter: {
        CostCenterID,
        Owner,
        CostCenter: {
          Source: { Name: String(formData.get("source") || "Website") },
          First_Name: String(formData.get("firstName") || ""),
          Middle_Name: String(formData.get("middleName") || ""),
          LastName: String(formData.get("lastName") || ""),
          Role: { Name: String(formData.get("role") || "") },
          Customer_Type: { Name: String(formData.get("customerType") || "") },
          Contact: { Name: String(formData.get("contact") || "") },
          Job_title: String(formData.get("jobTitle") || ""),
          Phone2: String(formData.get("phone2") || ""),
          Department: String(formData.get("department") || ""),
          City: String(formData.get("city") || ""),
          State: { Name: String(formData.get("state") || "") },
          Type_of_Lead: { Name: String(formData.get("typeOfLead") || "") },
        },
      },
    };

    // x-www-form-urlencoded with Request and Authorization keys
    const body = new URLSearchParams();
    body.set("Request", JSON.stringify(requestJson)); // single JSON field per API
    body.set("Authorization", ""); // empty for now

    const url = process.env.PACT_REVEN_U_URL as string;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
      },
      body,
    });

    const contentType = res.headers.get("content-type") || "";
    // Prefer JSON parse on success, per Fetch best practices
    // Fallback to text and attempt JSON.parse when content-type is missing/mis-set upstream
    let payload: any = null;
    if (contentType.includes("application/json")) {
      payload = await res.json();
    } else {
      const text = await res.text().catch(() => "");
      try {
        payload = JSON.parse(text);
      } catch {
        payload = { raw: text };
      }
    }

    if (!res.ok) {
      return {
        ok: false,
        message: contentType.includes("xml")
          ? "Upstream XML error"
          : contentType.includes("json")
          ? "Upstream JSON error"
          : "Upstream non-OK",
        status: res.status,
        statusText: res.statusText,
        contentType,
        body: typeof payload === "string" ? payload : JSON.stringify(payload),
      };
    }

    // Example success log, matching your Postman sample
    // Expected: { SetCostCenter: { Status: "true", ID: "458", Message: "Saved Succesfully" } }
    // console.log("Upstream success:", payload);
    // console.log("Upstream success:", res);
    // console.log("Upstream success:", body);


    return { ok: true, data: payload };
  } catch (err: any) {
    return { ok: false, message: err?.message || "Unknown server error" };
  }
}
