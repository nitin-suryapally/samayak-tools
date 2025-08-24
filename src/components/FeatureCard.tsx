import React from "react";

type FeatureItem = {
  label: string;
  desc: string;
  iconColor: string;
};

type FeatureBlockProps = {
  title: string;
  items: FeatureItem[];
};

export default function FeatureCard({ title, items }: FeatureBlockProps) {
  return (
    <div className="w-full">
      <span className="uppercase text-sm tracking-wider font-semibold text-red-400 block mb-2">Features</span>
      <h3 className="font-black text-2xl md:text-3xl mb-5">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className={`mt-1 text-2xl ${
                item.iconColor === "red"
                  ? "text-red-400"
                  : "text-black"
              }`}
            >
              {/* Example icon: tweak as needed */}
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /></svg>
            </span>
            <div>
              <div className="font-bold text-lg">{item.label}</div>
              <div className="text-gray-600 text-base">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
