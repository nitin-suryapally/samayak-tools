import { WaxFlexItem } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function WaxFlexCard({ item }: { item: WaxFlexItem }) {
  return (
    <div className="w-full max-w-sm bg-black flex flex-col rounded-none px-6 py-8 shadow-md">
      <div className="w-full h-40 bg-white mb-6 flex items-center justify-center">
        {item.imgSrc && (
          <Image
            src={item.imgSrc}
            alt=""
            width={280}
            height={140}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="flex flex-col gap-5 mb-8">
        <p className="text-white font-black text-base leading-snug">
          {item.description}
        </p>
        <p className="text-white font-black text-base leading-snug">
          {item.description}
        </p>
      </div>
      <div className="mt-auto">
        <Link
          href={item.download}
          download
          className="block w-full bg-white text-black py-2 rounded-none text-center font-medium text-base mt-2 hover:bg-gray-100 transition"
        >
          Download
        </Link>
      </div>
    </div>
  );
}
