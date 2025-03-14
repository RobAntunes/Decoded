// types/navigation.ts
import { ElementType } from "react";

export type BusinessType = "eCommerce" | "Enterprise" | "Government";

export type ProductItem = {
  name: string;
  description?: string;
  href: string;
  icon?: ElementType;
  businessTypes: {
    [key in BusinessType]?: {
      description?: string;
      href: string;
    };
  };
};

export type INavigation = {
  products: ProductItem[];
};

export interface MenuItem {
  name: string;
  description?: string;
  href: string;
  icon?: ElementType;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MegaMenuProps {
  buttonText: string;
  mainItems: MenuItem[];
  callsToAction: MenuItem[];
}
