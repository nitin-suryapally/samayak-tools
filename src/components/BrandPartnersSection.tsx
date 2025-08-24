 // adjust path if needed

import { BrandPartnersCarouselClient } from "./BrandPartnersCarouselClient";

const logos = [
  "/logos/brand1.png",
  "/logos/brand2.png",
  "/logos/brand3.png",
  "/logos/brand4.png",
  "/logos/brand5.png",
  "/logos/brand6.png",
  "/logos/brand7.png",
  "/logos/brand8.png",
  "/logos/brand8.png",
  "/logos/brand8.png",
  "/logos/brand8.png",
];

export function BrandPartnersSection() {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="font-black text-2xl md:text-4xl" style={{ letterSpacing: -1 }}>
          Our Brand Partners
        </h2>
      </div>
      <BrandPartnersCarouselClient logos={logos} />
    </section>
  );
}
