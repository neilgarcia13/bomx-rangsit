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
  price: {
    amount: number;
    currency: "PHP";
  };
};
