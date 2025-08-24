import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-10 md:py-20 flex flex-col">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 tracking-tight">ABOUT US</h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start relative">
        {/* Image Section + Our Expertise below it */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-md aspect-video rounded-xl bg-black flex items-center justify-center">
            <Image
              src="/about-us-image.jpg"
              alt="About Samyak Tools"
              width={500}
              height={300}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
          {/* Our Expertise title directly under image, aligned left on desktop */}

        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
          <span className="uppercase text-sm font-semibold tracking-wide text-red-400 mb-2">
            Samyak Tools
          </span>
          <h2 className="font-black text-2xl md:text-3xl mb-4 leading-tight">
            WE ALWAYS MAKE<br className="hidden md:block" /> THE BEST
          </h2>
          <p className="text-gray-700 mb-3 text-base md:text-lg"> With three decades of hands-on expertise and a catalog of 10,000+ professional products, we engineer solutions that deliver consistent, repeatable results. From gypsum-bonded investments for gold, silver, brass and bronze to high-precision alloys and Orotig laser welders, every item is selected for purity, stability, and finish quality. </p>
          <p className="text-gray-700 text-base md:text-lg"> As the exclusive distributor for Pandora Alloys and Certus Investment Powders, we help manufacturers achieve sharper detail, smoother casting surfaces, and faster post-processing. Whether scaling production or perfecting intricate designs, our materials and machines are built for precision—and trusted by professionals. </p>
        </div>
      </div>
    </section>
  );
}
