import { WaxItem } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function WaxCard({ item }: { item: WaxItem }) {
  return (
    <div className="relative w-full max-w-sm mx-auto min-h-[520px]">
      {/* Stacked border accent effect */}
      <div className="absolute top-6 left-3 w-full h-full border-2 border-black -z-10" />
      <div className="border-2 border-black bg-gradient-to-b from-[#FFE3A8] to-[#F5A6AF] rounded-none shadow-lg px-6 pt-6 pb-8 flex flex-col justify-between min-h-[520px]">
        {/* Variant (Title) */}
        <h3 className="font-black text-xl md:text-2xl mb-3 text-center">{item.variant}</h3>
        {/* Image */}
        <div className="w-full h-36 md:h-40 flex items-center justify-center mb-6">
          <div className="w-56 h-36 md:w-60 md:h-40 bg-[#b89c6c]/40 rounded-none flex items-center justify-center">
            <Image
              src={item.imgSrc}
              alt={item.variant}
              width={220}
              height={110}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Description */}
        <div className="mb-7">
          {item.description.split("\n").map((line, i) => (
            <p
              key={i}
              className="text-black font-bold text-base md:text-lg leading-snug mb-4 text-left"
            >
              {line}
            </p>
          ))}
        </div>
        {/* Download Button */}
        <div className="w-full flex justify-end">
          <Link
            href={item.download ?? "#"}
            className="bg-black text-white text-base font-medium px-8 py-3 rounded-md mt-0 hover:bg-gray-900 transition"
            download
          >
            Download
          </Link>
        </div>
      </div>
    </div>
  );
}
