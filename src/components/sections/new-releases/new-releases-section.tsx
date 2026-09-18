import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/motion/scroll-reveal";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const NewReleasesSection = () => {
  const newReleaseProducts = products.filter((product) => product.newRelease).slice(0, 4);

  return (
    <section id="new-releases" className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <div>
            <p className="text-primary mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
              New Releases
            </p>
            <h2 className="font-display text-foreground max-w-2xl text-4xl leading-none tracking-tight uppercase sm:text-5xl lg:text-6xl">
              Fresh from the workshop.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-6 sm:text-base">
              Discover the latest BOMX upgrades for your next build.
            </p>
          </div>

          <Link
            href="/products"
            className="group/view-all text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-card hidden shrink-0 items-center gap-2 rounded-sm text-sm font-semibold uppercase transition-colors sm:inline-flex"
          >
            View All Products
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover/view-all:translate-x-0.5 group-hover/view-all:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {newReleaseProducts.map((product, index) => {
            return (
              <ScrollReveal key={product.id} className="h-full" delay={index * 0.07}>
                <article className="h-full">
                  <Link
                    href={`/products/${product.slug}`}
                    className="group/product border-border bg-background focus-visible:ring-ring focus-visible:ring-offset-card grid h-full grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] overflow-hidden rounded-xl border"
                  >
                    <div className="bg-muted relative isolate min-h-48 overflow-hidden border-r">
                      <Image
                        fill
                        src={product.images[0]}
                        alt="BOMX new release"
                        sizes="(min-width: 768px) 22vw, 42vw"
                        className="object-cover transition-transform duration-300 group-hover/product:scale-[1.05] sm:p-5"
                      />
                    </div>

                    <div className="flex min-w-0 flex-col p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="text-primary text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                          New Release
                        </p>
                        <span aria-hidden="true" className="bg-border size-1 rounded-full" />
                        <p className="text-muted-foreground text-[0.65rem] font-semibold tracking-[0.12em] uppercase">
                          {product.category}
                        </p>
                      </div>

                      <h3 className="font-display text-foreground group-hover/product:text-primary mt-3 text-2xl leading-none tracking-tight uppercase transition-colors sm:text-3xl">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-xs sm:text-sm">
                        {product.series}
                      </p>

                      <div className="border-border mt-auto flex items-center justify-between gap-3 border-t pt-4">
                        <p className="text-foreground text-sm font-semibold sm:text-base">
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
          className="text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-card mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold uppercase transition-colors sm:hidden"
        >
          View All Products
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewReleasesSection;
