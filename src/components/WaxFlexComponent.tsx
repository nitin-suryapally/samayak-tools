import { waxFlexData } from "@/data";
import WaxFlexCard from "./WaxFlexCard";

export default function WaxFlexComponent() {
  return (
    <section className="max-w-7xl mx-auto px-2 py-10 md:py-16">
      <h1 className="text-2xl md:text-4xl font-black text-center mb-2">WAX FLEX</h1>
      <div className="text-center text-sm md:text-base mb-10 text-black font-medium max-w-xl mx-auto">
        One Wax For Everything, Unique Formula Works Perfectly
        For All Types Of Patterns, Great For Everything, From Thick
        Too Thin To Fine Filigree.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center">
        {waxFlexData.map((item, idx) => (
          <WaxFlexCard item={item} key={idx} />
        ))}
      </div>
    </section>
  );
}