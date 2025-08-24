import React from "react";

type CustomizableBlockProps = {
  title: string;
  desc: string[];
  iconColor: string;
};

export default function CustomizableCard({ title, desc, iconColor }: CustomizableBlockProps) {
  return (
    <div className="w-full max-w-lg">
      <div className="flex items-end gap-3 mb-4">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-2xl ${
          iconColor === "red"
            ? "bg-red-100 text-red-500"
            : "bg-black text-white"
        }`}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" /></svg>
        </span>
        <span className="font-black text-xl">{title}</span>
      </div>
      {desc.map((paragraph, idx) => (
        <p key={idx} className="text-gray-800 text-base mb-3">{paragraph}</p>
      ))}
    </div>
  );
}
