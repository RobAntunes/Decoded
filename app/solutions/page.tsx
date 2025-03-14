import { Hero } from "@/components/Hero";
import { solutions } from "@/data/solutions";

export default function SolutionsIndex() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Solutions</h1>
        <p className="text-lg mb-8">
          Explore our range of solutions for eCommerce and Enterprise customers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {solutions.products.map((product) => (
            <a 
              key={product.name}
              href={product.href} 
              className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50"
            >
              <div className="flex items-center mb-4">
                {product.icon && <product.icon className="h-6 w-6 text-blue-600 mr-2" />}
                <h2 className="text-xl font-bold">{product.name}</h2>
              </div>
              <p className="text-gray-700">{product.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.keys(product.businessTypes).map((type) => (
                  <span key={type} className="px-2 py-1 bg-gray-100 text-sm rounded-full">
                    {type}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
} 