import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/motion/scroll-reveal";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const FeaturedProductsSection = () => {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

  return (
    <section
      id="featured-products"
      className="bg-background overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <div>
            <p className="text-primary mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
              Featured Products
            </p>
            <h2 className="font-display text-foreground max-w-2xl text-4xl leading-none tracking-tight uppercase sm:text-5xl lg:text-6xl">
              Parts at the front of the pack.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-6 sm:text-base">
              Selected BOMX upgrades for performance-focused builds.
            </p>
          </div>

          <Link
            href="/products"
            className="group/view-all text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-background hidden shrink-0 items-center gap-2 rounded-sm text-sm font-semibold uppercase transition-colors focus-visible:ring-2 sm:inline-flex"
          >
            View All Products
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover/view-all:translate-x-0.5 group-hover/view-all:-translate-y-0.5"
            />
          </Link>
        </div>

        <p className="text-muted-foreground mb-4 flex items-center gap-2 text-xs font-medium tracking-wide uppercase lg:hidden">
          Swipe to browse
          <ArrowRight aria-hidden="true" className="size-4" />
        </p>

        <div className="-mx-4 flex snap-x snap-mandatory [scrollbar-color:var(--border)_transparent] gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {featuredProducts.map((product, index) => {
            const primaryImage = product.images[0];

            return (
              <ScrollReveal
                key={product.id}
                className="w-[82vw] max-w-88 shrink-0 snap-start sm:w-[44vw] lg:w-auto lg:max-w-none"
                delay={index * 0.1}
              >
                <article className="h-full">
                  <Link
                    href={`/products/${product.slug}`}
                    className="group/product focus-visible:ring-ring focus-visible:ring-offset-background block h-full rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <div className="border-border bg-muted relative isolate aspect-square overflow-hidden rounded-xl border">
                      <Image
                        fill
                        src={primaryImage}
                        alt=""
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 44vw, 82vw"
                        className="object-contain p-6 transition-transform duration-300 group-hover/product:scale-[1.05]"
                      />
                    </div>

                    <div className="px-1 pt-5">
                      <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                        {product.category}
                      </p>
                      <h3 className="font-display text-foreground group-hover/product:text-primary mt-2 text-3xl leading-none tracking-tight uppercase transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm">{product.series}</p>

                      <div className="border-border mt-5 flex items-center justify-between gap-4 border-t pt-4">
                        <p className="text-foreground text-base font-semibold">
                          {formatPrice(product.price.amount)}
                        </p>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="text-foreground group-hover/product:text-primary size-5 shrink-0 transition-transform group-hover/product:translate-x-0.5 group-hover/product:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <Link
          href="/products"
          className="text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-background mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold uppercase transition-colors sm:hidden"
        >
          View All Products
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
