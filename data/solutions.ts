// data/solutions.ts
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentMagnifyingGlassIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { INavigation } from "@/types/navigation";


export const solutions: INavigation = {
  products: [
    {
      name: "Decoded",
      description: "AI-powered classification of goods",
      href: "/solutions/decoded",
      icon: DocumentMagnifyingGlassIcon,
      businessTypes: {
        "eCommerce": {
          description: "AI-powered classification of goods for accurate HS/HTS codes and duty calculations",
          href: "/solutions/decoded/ecommerce",
        },
        "Enterprise": {
          description: "Large-scale, enterprise grade, AI powered classification of goods",
          href: "/solutions/decoded/enterprise",
        },
      },
    },
    {
      name: "Landed Cost Calculator",
      description: "Calculate landed costs for imports and exports",
      href: "/solutions/landed-cost-calculator",
      icon: CurrencyDollarIcon,
      businessTypes: {
        "eCommerce": {
          description: "Calculate landed costs for imports and exports, including duty, tax, and freight",
          href: "/solutions/landed-cost-calculator/ecommerce",
        },
      },
    },
    {
      name: "Business Growth Engine",
      description: "AI-powered strategic decision-making",
      href: "/solutions/business-growth-engine",
      icon: ChartBarIcon,
      businessTypes: {
        "eCommerce": {
          description: "AI-powered strategic decision-making and market expansion",
          href: "/solutions/business-growth-engine/ecommerce",
        },
      },
    },
    {
      name: "Sourcing Optimizer",
      description: "AI-powered sourcing optimization",
      href: "/solutions/sourcing-optimizer",
      icon: ShoppingBagIcon,
      businessTypes: {
        "Enterprise": {
          description: "AI-powered sourcing optimization for cost reduction and supplier diversification",
          href: "/solutions/sourcing-optimizer/enterprise",
        },
      },
    },
  ],
};

export const callsToAction = [
  {
    name: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: CurrencyDollarIcon,
  },
];
