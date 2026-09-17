import { Suspense } from "react";

import HeroTrackField from "@/components/hero-track-field";
import { products } from "@/data/products";

import ProductCatalog from "./_components/product-catalog";

const ProductsPage = () => {
  return (
    <main className="bg-background flex-1">
      <section>
        <header className="border-border relative isolate overflow-hidden border-b py-12 sm:py-16 lg:py-20">
          <HeroTrackField variant="catalog" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-foreground text-5xl leading-none tracking-tight uppercase sm:text-6xl lg:text-7xl">
              All Products
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-6 sm:text-base">
              Explore BOMX upgrades built for performance, control, and distinctive motorcycle
              builds.
            </p>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <Suspense fallback={null}>
            <ProductCatalog products={products} />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
