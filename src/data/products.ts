export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  series: string;
  description: string;
  images: string[];
  compatibleMotorcycles: string[];
  featured: boolean;
  newRelease: boolean;
  specifications: Record<string, string>;
  price: {
    amount: number;
    currency: "PHP";
  };
};

export const products: Product[] = [
  {
    id: "product-001",
    slug: "bomx-floating-brake-disc",
    name: "BOMX Floating Brake Disc",
    category: "Brake Systems",
    series: "Racing Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-floating-brake-disc/featured.webp"],
    compatibleMotorcycles: [],
    featured: true,
    newRelease: false,
    specifications: {},
    price: { amount: 2150, currency: "PHP" },
  },
  {
    id: "product-002",
    slug: "bomx-rear-shock",
    name: "BOMX Rear Shock",
    category: "Suspension",
    series: "Competition Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-rear-shock/featured.webp"],
    compatibleMotorcycles: [],
    featured: true,
    newRelease: false,
    specifications: {},
    price: { amount: 6700, currency: "PHP" },
  },
  {
    id: "product-003",
    slug: "bomx-lever-guard",
    name: "BOMX Lever Guard",
    category: "Hand Controls",
    series: "Racing Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-lever-guard/featured.webp"],
    compatibleMotorcycles: [],
    featured: true,
    newRelease: false,
    specifications: {},
    price: { amount: 1850, currency: "PHP" },
  },
  {
    id: "product-004",
    slug: "bomx-open-pipe",
    name: "BOMX Super Open Pipe",
    category: "Wheels & Accessories",
    series: "Racing Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-open-pipe/featured.webp"],
    compatibleMotorcycles: [],
    featured: true,
    newRelease: false,
    specifications: {},
    price: { amount: 8500, currency: "PHP" },
  },
  {
    id: "product-005",
    slug: "bomx-indo-seat",
    name: "BOMX INDO Seat",
    category: "Wheels & Accessories",
    series: "Competition Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-indo-seat/featured.webp"],
    compatibleMotorcycles: [],
    featured: false,
    newRelease: true,
    specifications: {},
    price: { amount: 2400, currency: "PHP" },
  },
  {
    id: "product-006",
    slug: "bomx-brake-caliper",
    name: "BOMX Brake Caliper BX4C02",
    category: "Brake Systems",
    series: "Racing Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-brake-caliper/featured.webp"],
    compatibleMotorcycles: [],
    featured: false,
    newRelease: true,
    specifications: {},
    price: { amount: 4995, currency: "PHP" },
  },
  {
    id: "product-007",
    slug: "bomx-brake-master",
    name: "BOMX Brake Master BM02",
    category: "Brake Systems",
    series: "Competition Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-brake-master/featured.webp"],
    compatibleMotorcycles: [],
    featured: false,
    newRelease: true,
    specifications: {},
    price: { amount: 1850, currency: "PHP" },
  },
  {
    id: "product-008",
    slug: "bomx-cvt-cover",
    name: "BOMX CVT Cover Crankcase",
    category: "Wheels & Accessories",
    series: "Performance Series",
    description: "Provisional product information.",
    images: ["/images/products/bomx-cvt-cover/featured.webp"],
    compatibleMotorcycles: [],
    featured: false,
    newRelease: true,
    specifications: {},
    price: { amount: 4590, currency: "PHP" },
  },
];
