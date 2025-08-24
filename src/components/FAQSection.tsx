import { faqs } from "@/data";
import React from "react";


export default function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-14">
      <div className="mb-3">
        <span className="uppercase text-sm md:text-lg tracking-widest text-red-300 font-medium">FAQ</span>
      </div>
      <h2 className="font-black text-3xl md:text-4xl mb-10 leading-tight">
        Frequently Asked<br className="" /> Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-5xl">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-6 max-w-md ${
              idx % 2 === 0 ? "bg-[#FF6464] text-white" : "bg-white text-black "
            }`}
          >
            <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
            <p className={`text-base ${idx % 2 === 0 ? "text-white" : "text-black"}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
