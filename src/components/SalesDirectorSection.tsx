import { directors } from "@/data";
import Image from "next/image";



export default function SalesDirectorSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-4xl font-black text-center mb-8 tracking-wide">
        ABOUT SALES DIRECTOR
      </h1>

      <div className="flex justify-between items-center mb-10 w-full">
        <div className="h-1 bg-black w-1/4" />
        <div className="h-1 bg-black w-1/4" />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 items-start">
        {/* Top Left Bio (mobile should come AFTER the image) */}
        <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-end mb-6 md:mb-0">
          <p className="text-center md:text-right text-gray-600 mb-6 max-w-[450px] text-sm lg:text-base">
            {directors[0].bio}
          </p>
        </div>

        {/* Top Right Image (mobile should come FIRST) */}
        <div className="order-1 md:order-2 flex flex-col items-center md:items-start">
          <div className="w-[320px] h-[180px] bg-black rounded-xl flex items-end justify-start overflow-hidden mb-2">
            <Image
              src={directors[0].image}
              alt={directors[0].name}
              width={320}
              height={180}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
          <div className="uppercase text-red-500 font-medium tracking-wide text-sm mb-4 pl-3">
            {directors[0].name}
          </div>
        </div>

        {/* Bottom Left Image (mobile should come FIRST in pair) */}
        <div className="order-3 md:order-3 flex flex-col items-center md:items-end">
          <div className="w-[320px] h-[180px] bg-black rounded-xl flex items-end justify-start overflow-hidden mb-2">
            <Image
              src={directors[1].image}
              alt={directors[1].name}
              width={320}
              height={180}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
          <div className="uppercase text-red-500 font-medium tracking-wide text-sm pl-3">
            {directors[1].name}
          </div>
        </div>

        {/* Bottom Right Bio (mobile should come AFTER the image) */}
        <div className="order-4 md:order-4 flex flex-col justify-center items-center md:items-start">
          <p className="text-center md:text-left text-gray-600 max-w-[450px] text-sm lg:text-base">
            {directors[1].bio}
          </p>
        </div>
      </div>
    </section>
  );
}

