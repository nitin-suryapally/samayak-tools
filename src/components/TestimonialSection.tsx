import Image from "next/image";
import { testimonal_image } from "../index";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-12 px-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Heading and subheading at the top */}
        <div className="w-full flex flex-col items-center mb-6">
          <span className="uppercase tracking-wider text-sm md:text-lg text-gray-500 mb-1">Testimonial</span>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-black leading-tight text-center">
            What Our Users<br className="hidden sm:block" /> Say About Us?
          </h2>
        </div>
        {/* Content row: image left, testimonial right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Left: Ornament Testimonial Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={testimonal_image}
              alt="Testimonial Illustration"
              width={480}
              height={480}
              className="w-full max-w-[350px] sm:max-w-[420px] md:max-w-[480px] h-auto"
              priority
            />
          </div>
          {/* Right: Testimonial Text -- vertically centered */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full">
            <div className="font-bold text-black text-lg md:text-xl mb-2 text-center md:text-left">
              Custom Tooling &amp; On-Time Delivery
            </div>
            <p className="text-gray-500 max-w-lg text-base md:text-lg text-center md:text-left">
              “Arou At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit. Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
