
import BioCard from "@/components/BioCard";
import { BrandPartnersSection } from "@/components/BrandPartnersSection";
import EngravingMachines from "@/components/EngravingMachines";
import FAQSection from "@/components/FAQSection";
import HeroCarousel from "@/components/HeroCarousel";
import Precision from "@/components/Precisson";
import TestimonialSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroCarousel />
      <BrandPartnersSection />
      <Precision />
      <EngravingMachines />
      <TestimonialSection />
      <BioCard />
      <FAQSection />
    </section>

  );
}
