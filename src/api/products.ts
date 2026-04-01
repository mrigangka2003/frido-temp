export type Mode = "couple" | "single";

export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  mrp: number;
  salePrice: number;
  discountPercent: number;
  badge: string;
  rating: number;
  reviews: number;
  imageColor: string; // used to render a stylized placeholder
  imageUrl?: string;
};

export const coupleCategories: Category[] = [
  { id: "sleep", label: "Sleep Paglu", icon: "😴" },
  { id: "travel", label: "Travel Paglu", icon: "✈️" },
  { id: "wfh", label: "WFH Paglu", icon: "💻" },
  { id: "gym", label: "GYM Paglu", icon: "🏋️" },
];

export const singleCategories: Category[] = [
  { id: "sleep", label: "Sleep", icon: "😴" },
  { id: "travel", label: "Travel", icon: "✈️" },
  { id: "wfh", label: "WFH", icon: "💻" },
  { id: "gym", label: "GYM", icon: "🏋️" },
];

export const giftCategories: Category[] = [
  { id: "mom", label: "Mom", icon: "👩" },
  { id: "dad", label: "Dad", icon: "👨" },
  { id: "bff", label: "BFF's", icon: "👫" },
  { id: "kids", label: "Kids", icon: "🧒" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Frido Orthopedic Heel Pad Pro Insole",
    tagline: "Relief From Heel Pain",
    mrp: 699,
    salePrice: 299,
    discountPercent: 57,
    badge: "Valentine's",
    rating: 4.7,
    reviews: 786,
    imageColor: "#6C63FF",
  },
  {
    id: "2",
    name: "Frido Orthopedic Heel Pad Pro Insole",
    tagline: "Relief From Heel Pain",
    mrp: 699,
    salePrice: 299,
    discountPercent: 57,
    badge: "Valentine's",
    rating: 4.7,
    reviews: 786,
    imageColor: "#8B5CF6",
  },
  {
    id: "3",
    name: "Frido Orthopedic Heel Pad Pro Insole",
    tagline: "Relief From Heel Pain",
    mrp: 699,
    salePrice: 299,
    discountPercent: 57,
    badge: "Pamper",
    rating: 4.7,
    reviews: 786,
    imageColor: "#7C3AED",
  },
  {
    id: "4",
    name: "Frido Orthopedic Heel Pad Pro Insole",
    tagline: "Relief From Heel Pain",
    mrp: 699,
    salePrice: 299,
    discountPercent: 57,
    badge: "Pamper",
    rating: 4.7,
    reviews: 786,
    imageColor: "#5B21B6",
  },
];

export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(products), 300));
};
