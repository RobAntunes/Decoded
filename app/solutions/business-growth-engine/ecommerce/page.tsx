import { Hero } from "@/components/Hero";
import Bento from "@/components/Bento";
import FAQ from "@/components/FAQ";
import Pricing from "@/app/get-started/pricing/page";
import StylishCarousel from "@/components/StylishCarousel";
import CTA1 from "@/components/CTA1";
import Stats from "@/components/Stats";
import HiW from "@/components/HiW";

export default function BusinessGrowthEngineEcommerce() {
  return (
    <>
      <Hero />
      <Bento />
      <CTA1 />
      <HiW />
      <Stats />
      <StylishCarousel />
      <FAQ />
      <Pricing />
    </>
  );
} 