// types/navigation.ts
import { ElementType } from 'react';

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