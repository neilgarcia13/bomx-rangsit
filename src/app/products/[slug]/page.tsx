import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import ProductDetails from "./_components/product-details";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
};

export const generateStaticParams = () =>
  products.map((product) => ({
    slug: product.slug,
  }));

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (candidate) => candidate.slug !== product.slug && candidate.category === product.category,
    )
    .slice(0, 4);

  return (
    <main className="bg-background flex-1">
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </main>
  );
};

export default ProductPage;
