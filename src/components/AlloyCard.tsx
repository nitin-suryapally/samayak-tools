import { Alloy } from "@/data";
import Image from "next/image";

export default function AlloyCard({
  title,
  description,
  imgSrc,
  reverse,
}: Alloy & { reverse?: boolean }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6 md:gap-10 items-center mb-12`}
    >
      <div className="relative w-full max-w-xs md:max-w-sm">
        <div className="absolute top-3 left-3 w-full h-full border-2 border-black -z-10" />
        <div className="aspect-square bg-black overflow-hidden">
          {/* Replace with <Image /> and your imgSrc for real images */}
          <Image
            src={imgSrc}
            alt={title}
            width={400}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-black mb-2">{title}</h3>
        <p className="text-base md:text-lg text-black">{description}</p>
      </div>
    </div>
  );
}