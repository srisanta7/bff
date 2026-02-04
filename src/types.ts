export interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
}

export interface SocialImage {
  id: number;
  url: string;
  alt: string;
}

// New interfaces for the detailed Full Menu
export interface FullMenuItem {
  name: string;
  description?: string;
  price: string | { label: string; value: string }[];
  veg?: boolean; // true for veg, false/undefined for non-veg or neutral
  bestseller?: boolean;
  spicy?: boolean;
  image?: string;
}

export interface FullMenuCategory {
  id: string;
  title: string;
  note?: string; // e.g., "Add Cheese ₹50"
  items: FullMenuItem[];
}

// Interface for Event Slider
export interface EventItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  ctaText?: string;
}
