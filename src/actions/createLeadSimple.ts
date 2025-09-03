// app/actions/createLeadSimple.ts
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

export async function createLeadSimple(
  _prev: LeadResult | null,
  formData: FormData
): Promise<LeadResult> {
  try {
    const CostCenterID = "86";     // per spec
    const Owner = "Admin";

    const requestJson = {
      SetCostCenter: {
        CostCenterID,
        Owner,
        CostCenter: {
          Company: String(formData.get("company") || ""),
          Message_or_Description: String(formData.get("description") || ""),
          Phone: String(formData.get("phone") || ""),
          Email: String(formData.get("email") || ""),
        },
      },
    };

    const body = new URLSearchParams();
    body.set("Request", JSON.stringify(requestJson));
    body.set("Authorization", "");

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
    let payload: any = null;
    if (contentType.includes("application/json")) {
      payload = await res.json();
    } else {
      const text = await res.text().catch(() => "");
      try { payload = JSON.parse(text); } catch { payload = { raw: text }; }
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

    // console.log("Upstream success (simple):", payload);
    return { ok: true, data: payload };
  } catch (err: any) {
    return { ok: false, message: err?.message || "Unknown server error" };
  }
}
