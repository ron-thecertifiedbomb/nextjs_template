import { GearItem } from "@/interfaces";

// Extended interface for internal use if you want to keep specs separate
export interface LaptopGear extends GearItem {
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    display: string;
  };
}

export const bestLaptops2026: LaptopGear[] = [
  {
    name: "Generic Item 1",
    category: "Hardware",
    description: "A generic template item description. Outlines the primary features and intended use cases for this product.",
    imageUrl: "/images/placeholder-laptop-1.jpg",
    isFavorite: true,
    specs: {
      cpu: "Spec Value A",
      gpu: "Spec Value B",
      ram: "Spec Value C",
      display: "Spec Value D",
    },
    id: "",
    brand: "",
    affiliateUrl: ""
  },
  {
    id: "item_02",
    name: "Generic Item 2",
    category: "Hardware",
    description: "An alternative generic template item. Focuses on different aspects and highlights secondary capabilities.",
    imageUrl: "/images/placeholder-laptop-2.jpg",
    isFavorite: false,
    specs: {
      cpu: "Spec Value A",
      gpu: "Spec Value B",
      ram: "Spec Value C",
      display: "Spec Value D",
    },
    brand: "",
    affiliateUrl: ""
  },
  {
    id: "item_03",
    name: "Generic Item 3",
    category: "Hardware",
    description: "A third generic template option. Provides placeholder details for a completely different variation of the item.",
    imageUrl: "/images/placeholder-laptop-3.jpg",
    isFavorite: false,
    specs: {
      cpu: "Spec Value A",
      gpu: "Spec Value B",
      ram: "Spec Value C",
      display: "Spec Value D",
    },
    brand: "",
    affiliateUrl: ""
  },
];
