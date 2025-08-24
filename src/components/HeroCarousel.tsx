'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroImage } from "../index";


interface Slide {
  label: string;
  bg: StaticImageData; 
}

const slides: Slide[] = [
  {
    label: "Intro Video / Photo",
    bg: heroImage,
  },
  {
    label: "Intro Video / Photo",
    bg: heroImage,
  },
  // Add more slides as needed
];

const HeroCarousel: React.FC = () => (
  <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
    <Carousel className="w-full h-full">
      <CarouselContent>
        {slides.map((slide, idx) => (
          <CarouselItem key={idx} className="w-full h-full bg-black">
            <div className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] flex items-center justify-center">
              {/* Image */}
              <Image
                src={slide.bg}
                alt={slide.label}
                priority
                className="object-cover"
                sizes="100vw"
              />
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/30 " />
              {/* Label */}
              {/* <span className="relative z-10 text-white text-base md:text-xl lg:text-2xl font-semibold text-center">
                {slide.label}
              </span> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2" />
      <CarouselNext className="right-3 top-1/2 -translate-y-1/2" />
    </Carousel>
  </section>
);

export default HeroCarousel;
