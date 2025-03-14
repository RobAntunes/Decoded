import { Hero } from "@/components/Hero";
import Bento from "@/components/Bento";
import FAQ from "@/components/FAQ";
import CTA1 from "@/components/CTA1";

export default function BusinessGrowthEngineIndex() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Business Growth Engine Solution</h1>
        <p className="text-lg mb-8">
          AI-powered strategic decision-making and market expansion. Currently available for eCommerce customers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <a href="/solutions/business-growth-engine/ecommerce" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50">
            <h2 className="text-2xl font-bold mb-2">eCommerce</h2>
            <p>AI-powered strategic decision-making and market expansion</p>
          </a>
        </div>
      </div>
      <Bento />
      <CTA1 />
      <FAQ />
    </>
  );
} 