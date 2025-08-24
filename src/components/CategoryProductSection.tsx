import React from "react";
import FeatureCard from "./FeatureCard";
import CustomizableCard from "./CustomizableCard";
import Image from "next/image";
import { CategoryDetail } from "@/data";

type Props = {
  data: CategoryDetail;
};

export default function CategoryProductSection({ data }: Props) {
  if (!data) return <div className="text-center py-16">No product found</div>;

  return (
    <section className="max-w-7xl mx-auto px-2 py-12 flex flex-col gap-24">
      <h1 className="text-2xl md:text-4xl font-black text-center mb-10">{data.name}</h1>

      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md aspect-square bg-black flex items-center justify-center">
            <Image
              src={data.images[0]}
              alt={data.name}
              width={420}
              height={420}
              className="object-cover "
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center">
          <FeatureCard {...data.features[0]} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-start">
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <CustomizableCard {...data.customizable[0]} />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md aspect-square bg-black flex items-center justify-center">
            <Image
              src={data.images[1]}
              alt={data.name}
              width={520}
              height={520}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA button */}
      <div className="w-full flex justify-center mt-10">
        <button className="bg-black text-white rounded px-8 py-3 hover:bg-gray-900 transition font-semibold shadow-lg text-lg">
          To Enquire About The Product Contact Us
        </button>
      </div>
    </section>
  );
}
