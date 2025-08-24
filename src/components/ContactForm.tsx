"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Errors = {
  full_name?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  company?: string;
  description?: string;
};

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = (formData: FormData) => {
    const next: Errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{8,15}$/;
    if (!formData.get("full_name")) next.full_name = "Full Name is required.";
    if (!formData.get("email") || !emailPattern.test(formData.get("email") as string))
      next.email = "Valid Email required.";
    if (!formData.get("phone") || !phonePattern.test(formData.get("phone") as string))
      next.phone = "Valid phone (numbers only, 8-15 chars) required.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    if (!form.current) return;
    const formData = new FormData(form.current);
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setStatus("Please correct the highlighted errors.");
      return;
    }
    setStatus("Sending...");
    emailjs
      .sendForm(
        "SERVICE_ID",      // <-- your emailjs service ID
        "TEMPLATE_ID",     // <-- your emailjs template ID
        form.current,
        "PUBLIC_KEY"       // <-- your emailjs public key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current?.reset();
        setErrors({});
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  // Styled input for field and error state
  const inputClass = (error?: string) =>
    `w-full border border-red-400 rounded-full px-4 py-2 focus:outline-none text-black bg-white ${
      error ? "border-red-700" : ""
    }`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent py-12 md:py-24">
      {/* Black Rounded Outer Container */}
      <div className="bg-black rounded-xl p-4 md:p-8 w-full max-w-2xl">
        {/* White Content Inner Container */}
        <div className="bg-white rounded-xl w-full h-full p-6 md:p-10">
          <h1 className="text-center text-2xl md:text-3xl font-bold mb-7 mt-1 tracking-wide">CONNECT WITH US</h1>
          <form ref={form} className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block font-bold text-xs mb-1 ml-1">FULL NAME*</label>
              <input type="text" name="full_name" required className={inputClass(errors.full_name)} />
              {errors.full_name && <span className="text-red-600 text-xs ml-1">{errors.full_name}</span>}
            </div>
            <div>
              <label className="block font-bold text-xs mb-1 ml-1">EMAIL*</label>
              <input type="email" name="email" required className={inputClass(errors.email)} />
              {errors.email && <span className="text-red-600 text-xs ml-1">{errors.email}</span>}
            </div>
            <div>
              <label className="block font-bold text-xs mb-1 ml-1">PHONE NO.*</label>
              <input type="tel" name="phone" required className={inputClass(errors.phone)} />
              {errors.phone && <span className="text-red-600 text-xs ml-1">{errors.phone}</span>}
            </div>
            <div className="flex gap-5">
              <div className="flex-1">
                <label className="block font-bold text-xs mb-1 ml-1">CITY</label>
                <input type="text" name="city" className={inputClass(errors.city)} />
              </div>
              <div className="flex-1">
                <label className="block font-bold text-xs mb-1 ml-1">STATE</label>
                <input type="text" name="state" className={inputClass(errors.state)} />
              </div>
            </div>
            <div>
              <label className="block font-bold text-xs mb-1 ml-1">COMPANY (OPTIONAL)</label>
              <input type="text" name="company" className={inputClass(errors.company)} />
            </div>
            <div>
              <label className="block font-bold text-xs mb-1 ml-1">DESCRIPTION</label>
              <textarea
                name="description"
                rows={4}
                className="w-full border border-red-400 rounded-2xl px-4 py-2 focus:outline-none text-black bg-white"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-black text-white px-10 py-2 rounded transition font-semibold w-full"
              >
                SUBMIT
              </button>
            </div>
            {status && <p className="text-center text-xs mt-2 font-medium">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
