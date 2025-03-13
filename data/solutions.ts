// data/solutions.ts
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentMagnifyingGlassIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { INavigation } from "@/types/navigation";


export const solutions: INavigation = {
  "eCommerce": {
    link: "/solutions/ecommerce/decoded",
    items: [
      {
        name: "Decoded",
        description:
          "AI-powered classification of goods for accurate HS/HTS codes and duty calculations",
        href: "/solutions/ecommerce/decoded",
        icon: DocumentMagnifyingGlassIcon,
      },
      {
        name: "Landed Cost Calculator",
        description:
          "Calculate landed costs for imports and exports, including duty, tax, and freight",
        href: "/solutions/ecommerce/landed-cost-calculator",
        icon: CurrencyDollarIcon,
      },
      {
        name: "Business Growth Engine",
        description:
          "AI-powered strategic decision-making and market expansion",
        href: "/solutions/ecommerce/business-growth-engine",
        icon: ChartBarIcon,
      },
    ],
  },
  Enterprise: {
    link: "/solutions/ecommerce/decoded",
    items: [
      {
        name: "Decoded",
        description:
          "Large-scale, enterprise grade, AI powered classification of goods",
        href: "/solutions/ecommerce/decoded",
        icon: BuildingOfficeIcon,
      },
      {
        name: "Sourcing Optimizer",
        description:
          "AI-powered sourcing optimization for cost reduction and supplier diversification",
        href: "/solutions/enterprise/sourcing-optimizer",
        icon: ShoppingBagIcon,
      },
    ],
  },
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
