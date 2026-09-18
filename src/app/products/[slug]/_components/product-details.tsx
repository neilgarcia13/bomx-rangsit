import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { motorcycles } from "@/data/motorcycles";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

import ProductGallery from "./product-gallery";
import CatalogContact from "../../_components/catalog-contact";

type RelatedProductsProps = {
  products: Product[];
};

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="border-border mt-16 border-t pt-14 sm:mt-20 sm:pt-16 lg:mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
            Related Products
          </p>
          <h2 className="font-display text-foreground mt-3 text-4xl leading-none tracking-tight uppercase sm:text-5xl">
            More from this category.
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const primaryImage = product.images[0];

          return (
            <article key={product.id}>
              <Link
                href={`/products/${product.slug}`}
                className="group/product focus-visible:ring-ring focus-visible:ring-offset-background block h-full rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <div className="border-border bg-muted relative isolate aspect-square overflow-hidden rounded-xl border">
                  <Image
                    fill
                    src={primaryImage}
                    alt=""
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-5 transition-transform duration-300 group-hover/product:scale-[1.04]"
                  />
                </div>

                <div className="px-1 pt-4">
                  <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                    {product.category}
                  </p>
                  <h3 className="font-display text-foreground group-hover/product:text-primary mt-2 text-3xl leading-none tracking-tight uppercase transition-colors">
                    {product.name}
                  </h3>
                  <div className="border-border mt-5 flex items-center justify-between gap-4 border-t pt-4">
                    <p className="text-foreground font-semibold">
                      {formatPrice(product.price.amount)}
                    </p>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="text-foreground group-hover/product:text-primary size-5 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

type ProductDetailsProps = {
  product: Product;
  relatedProducts: Product[];
};

const ProductDetails = ({ product, relatedProducts }: ProductDetailsProps) => {
  const compatibleModels = product.compatibleMotorcycles.flatMap((slug) => {
    const motorcycle = motorcycles.find((item) => item.slug === slug);

    return motorcycle ? [`${motorcycle.make} ${motorcycle.name}`] : [];
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <Link
        href="/products"
        className="text-muted-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center gap-2 rounded-sm text-sm font-medium transition-colors"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to Products
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(20rem,5fr)] lg:items-start lg:gap-12 xl:gap-16">
        <ProductGallery key={product.slug} productName={product.name} images={product.images} />

        <article className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
            {product.category}
          </p>
          <h1 className="font-display text-foreground mt-3 text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl xl:text-7xl">
            {product.name}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm font-medium uppercase">
            {product.series}
          </p>
          <p className="text-foreground mt-6 text-2xl font-semibold">
            {formatPrice(product.price.amount)}
          </p>

          <div className="border-border mt-8 border-t pt-8">
            <h2 className="font-display text-foreground text-3xl uppercase">Product Details</h2>
            <p className="text-muted-foreground mt-3 text-base leading-7">{product.description}</p>
          </div>

          <div className="border-border mt-8 border-t pt-8">
            <h2 className="font-display text-foreground text-3xl uppercase">
              Compatible Motorcycles
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {compatibleModels.map((model) => (
                <span
                  key={model}
                  className="border-border bg-muted text-foreground rounded-full border px-3 py-1.5 text-xs font-medium"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>

      <RelatedProducts products={relatedProducts} />

      <CatalogContact />
    </div>
  );
};

export default ProductDetails;
