import legendImg from "@/assets/legend.jpg";
import teddyGirlImg from "@/assets/teddy-girl.jpg";
import toxiqImg from "@/assets/toxiq.jpg";
import chaseMeImg from "@/assets/chase-me.jpg";
import chillVibeImg from "@/assets/chill-vibe.jpg";

export interface Product {
  id: string;
  name: string;
  category: "Men" | "Women" | "Unisex";
  price: number;
  size: string;
  notes: string[];
  description: string;
  image: string;
  isGiftSet?: boolean;
}

export const products: Product[] = [
  {
    id: "legend",
    name: "Legend",
    category: "Men",
    price: 1299,
    size: "50ml",
    notes: ["Bergamot", "Lemon"],
    description: "A bold, masculine fragrance that captures the essence of timeless elegance. Fresh citrus notes blend with warm undertones for the modern gentleman.",
    image: legendImg,
  },
  {
    id: "teddy-girl",
    name: "Teddy Girl",
    category: "Women",
    price: 1299,
    size: "50ml",
    notes: ["Apple Blossom", "Rose"],
    description: "A delicate floral symphony that celebrates femininity. Soft rose petals dance with fresh apple blossom in this enchanting eau de parfum.",
    image: teddyGirlImg,
  },
  {
    id: "toxiq",
    name: "Toxiq",
    category: "Unisex",
    price: 1299,
    size: "50ml",
    notes: ["Wild Plum", "Jasmine"],
    description: "An intoxicating blend of mysterious fruits and exotic florals. Daring, seductive, and utterly unforgettable.",
    image: toxiqImg,
  },
  {
    id: "chase-me",
    name: "Chase Me",
    category: "Unisex",
    price: 1299,
    size: "50ml",
    notes: ["Cacao", "Vanilla"],
    description: "A warm, gourmand fragrance that wraps you in luxury. Rich cacao meets creamy vanilla for an irresistible finish.",
    image: chaseMeImg,
  },
  {
    id: "chill-vibe",
    name: "Chill Vibe",
    category: "Unisex",
    price: 1299,
    size: "50ml",
    notes: ["Mojito", "Lime"],
    description: "A refreshing escape captured in a bottle. Zesty lime and cool mint create a carefree, invigorating experience.",
    image: chillVibeImg,
  },
];

export const giftSet: Product = {
  id: "gift-set",
  name: "Essence of Every Mood",
  category: "Unisex",
  price: 2499,
  size: "Gift Set",
  notes: ["All Five Fragrances"],
  description: "The complete Puniora collection. Five signature scents for every mood, beautifully presented in our luxury gift box.",
  image: legendImg, // We'll use a composite image
  isGiftSet: true,
};

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString("en-IN")}`;
};
