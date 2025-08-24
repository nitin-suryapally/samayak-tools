import { machines } from "@/data";
import Image from "next/image";
import Link from "next/link";
import MachineCard from "./MachineCard";
import { ring } from "../index";

export default function EngravingMachines() {
  return (
    <section className="relative w-full flex justify-center items-center py-10 bg-white">
      <div className="relative w-full max-w-7xl rounded-2xl bg-black overflow-hidden px-4 py-10 md:py-14 flex flex-col items-center">
        {/* Decorative Images */}
        <Image
          src={ring}
          alt=""
          width={400}
          height={400}
          className="hidden md:block absolute -left-30 -bottom-40 z-10"
          draggable={false}
        />
        <Image
          src={ring}
          alt=""
          width={400}
          height={400}
          className="hidden md:block absolute -right-30 -top-40 z-10 rotate-180"
          draggable={false}
        />

        {/* Title Content */}
        <div className="relative z-20 flex flex-col items-center space-y-2 mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-white text-center">
            Ready To Get Started?
          </h2>
          <div className="font-semibold text-white text-lg md:text-2xl text-center tracking-wide">
            Engraving Machines
          </div>
        </div>

        {/* Machine Cards: Use items-stretch to make all cards equal height */}
        <div className="relative z-20 flex flex-col gap-10 md:flex-row md:gap-0 w-full justify-center items-stretch">
          {machines.map((machine, idx) => (
            <MachineCard
              key={idx}
              imgSrc={machine.imgSrc}
              name={machine.name}
            />
          ))}
        </div>

        {/* Explore button */}
        <div className="w-full flex justify-center mt-8 md:mt-10 mb-2">
          <Link href="/machines">
            <button className="block bg-white text-black font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
