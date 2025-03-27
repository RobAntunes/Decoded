import { Hero } from "@/components/Hero";
import Bento from "@/components/Bento";
import FAQ from "@/components/FAQ";
import Pricing from "@/app/get-started/pricing/page";
import StylishCarousel from "@/components/StylishCarousel";
import CTA1 from "@/components/CTA1";
import Stats from "@/components/Stats";
import How from "@/components/How";

export default function LandedCostCalculatorEcommerce() {
  return (
    <>
      <Hero />
      <Bento />
      <CTA1 />
      <How />
      <Stats />
      <StylishCarousel />
      <FAQ />
      <Pricing />
    </>
  );
} 