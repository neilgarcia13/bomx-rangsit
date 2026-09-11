import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Brake Systems",
    slug: "brake-systems",
    featured: true,
    imageLink: "/images/categories/brake-systems.webp"
  },
  {
    name: "Suspension",
    slug: "suspension",
    featured: false,
    imageLink: "/images/categories/suspension.webp"
  },
  {
    name: "Hand Controls",
    slug: "hand-controls",
    featured: false,
    imageLink: "/images/categories/hand-controls.webp"
  },
  {
    name: "Foot Controls",
    slug: "foot-controls",
    featured: false,
    imageLink: "/images/categories/foot-controls.webp"
  },
  {
    name: "Wheels & Accessories",
    slug: "wheels-and-accessories",
    featured: false,
    imageLink: "/images/categories/wheels.webp"
  },
] as const;

const ShopByCategorySection = () => {
  return (
    <section id="collections" className="bg-card scroll-mt-16 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <div>
            <p className="text-primary mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
              Shop by Category
            </p>
            <h2
              id="collections-heading"
              className="font-display text-foreground max-w-2xl text-4xl tracking-tight uppercase sm:text-5xl lg:text-6xl"
            >
              Specificity is key.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-56 lg:grid-cols-12">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className={cn(
                "group/category border-border bg-muted focus-visible:ring-ring focus-visible:ring-offset-card relative isolate overflow-hidden rounded-xl border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                category.featured
                  ? "min-h-112 md:col-span-2 md:min-h-120 lg:col-span-6 lg:row-span-2 lg:min-h-0"
                  : "min-h-64 lg:col-span-3 lg:min-h-0",
              )}
            >
              <div aria-hidden="true" className="bg-muted absolute inset-0" />
              <div
                aria-hidden="true"
                className={cn(
                  "bg-primary absolute -top-12 -right-10 rotate-12 rounded-4xl transition-transform duration-300 group-hover/category:scale-105",
                  category.featured ? "size-72 sm:size-96" : "size-40",
                )}
              />
              <div
                aria-hidden="true"
                className={cn(
                  "bg-secondary absolute -bottom-10 -left-8 rounded-full",
                  category.featured ? "size-44" : "size-28",
                )}
              />

              <div
                className={cn(
                  "border-foreground/20 bg-background/55 absolute inset-x-5 top-5 bottom-24 grid place-items-center rounded-2xl backdrop-blur-sm",
                  category.featured && "sm:inset-x-7 sm:top-7 sm:bottom-28",
                )}
              >
                <Image
                  fill
                  preload
                  src={category.imageLink}
                  alt="BOMX custom motorcycle at a competition event"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="from-card via-card/95 absolute inset-x-0 bottom-0 z-10 bg-linear-to-t to-transparent px-5 pt-14 pb-5 sm:px-6 sm:pb-6">
                <div className="text-muted-foreground mb-2 flex items-center justify-between gap-4 text-[0.65rem] font-semibold tracking-[0.15em] uppercase"></div>
                <div className="flex items-end justify-between gap-4">
                  <h3
                    className={cn(
                      "font-display text-foreground group-hover/category:text-primary leading-none tracking-tight uppercase transition-colors",
                      category.featured ? "text-4xl sm:text-5xl" : "text-3xl",
                    )}
                  >
                    {category.name}
                  </h3>
                  <ArrowUpRight className="text-foreground group-hover/category:text-primary mb-0.5 size-5 shrink-0 transition-transform group-hover/category:translate-x-0.5 group-hover/category:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
