import Image from "next/image";
import Link from "next/link";
import { gradient, precissionImage } from "../index"; 

export default function Precision() {
  return (
    <section className="relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
        {/* LEFT */}
        <div className="flex-1 w-full flex flex-col items-start">
          {/* Gradient (as image, absolute, behind headline) */}
          <div className="absolute left-20 md:left-[150px] top-0 w-full h-40 md:h-48 pointer-events-none z-1 flex items-start">
            <Image
              src={gradient} // use your actual file path
              alt="Gradient"
              width={430}
              height={240}
              className="w-80 h-40 md:w-[430px] md:h-[240px] object-cover opacity-70"
              priority
            />
          </div>
          {/* Headline */}
          <h1 className="font-black text-3xl md:text-4xl leading-tight text-black mb-4 w-full z-10 relative">
            Built For Precision.<br />
            <span className="text-black">Trusted By Professionals.</span>
          </h1>
          {/* Subtitle */}
          <p className="mb-7 text-gray-500 text-base md:text-lg max-w-lg">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          {/* Button */}
          <Link
            href="#"
            className="inline-flex items-center px-7 py-3 bg-black text-white rounded-md font-semibold text-base group hover:bg-gray-800 transition"
          >
            Shop Now
            <span className="ml-2 text-xl transition-transform group-hover:translate-x-1">→</span>
          </Link>
          {/* Decorative Image (left bottom) */}
          <div className="mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src={precissionImage} // decorative bottom-left image
              alt="Samyak Tools Ribbon"
              width={280}
              height={80}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex-1 min-w-[260px] flex justify-center items-center">
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[370px] md:h-[370px] rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              src="/hero-side.png" // replace with your image path
              alt="Samyak Tools Product"
              width={340}
              height={340}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
