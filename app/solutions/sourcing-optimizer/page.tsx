import { Hero } from "@/components/Hero";
import Bento from "@/components/Bento";
import FAQ from "@/components/FAQ";
import CTA1 from "@/components/CTA1";

export default function SourcingOptimizerIndex() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sourcing Optimizer Solution</h1>
        <p className="text-lg mb-8">
          AI-powered sourcing optimization for cost reduction and supplier diversification. Currently available for Enterprise customers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <a href="/solutions/sourcing-optimizer/enterprise" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50">
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <p>AI-powered sourcing optimization for cost reduction and supplier diversification</p>
          </a>
        </div>
      </div>
      <Bento />
      <CTA1 />
      <FAQ />
    </>
  );
} 