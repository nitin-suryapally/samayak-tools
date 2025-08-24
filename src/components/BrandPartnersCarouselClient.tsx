"use client";
import React, { useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface BrandPartnersCarouselClientProps {
  logos: string[];
}

export function BrandPartnersCarouselClient({ logos }: BrandPartnersCarouselClientProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const interval = useRef<NodeJS.Timeout | null>(null);

  // Autoplay effect
  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    interval.current = setInterval(autoScroll, 1900); 
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [emblaApi, autoScroll]);

  return (
    <div className="overflow-hidden w-full mx-auto px-4" ref={emblaRef}>
      <div className="flex">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="mx-4 flex-shrink-0 rounded-lg bg-gray-200"
            style={{ width: 160, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            
          </div>
        ))}
      </div>
    </div>
  );
}
