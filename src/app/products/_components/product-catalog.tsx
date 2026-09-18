"use client";

import type { SubmitEvent } from "react";
import { ArrowUpRight, ImageIcon, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motorcycles } from "@/data/motorcycles";
import { cn, createCategorySlug, formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

const productsPerPage = 8;

type ProductCatalogProps = {
  products: Product[];
};

const ProductCatalog = ({ products }: ProductCatalogProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = [...new Set(products.map((product) => product.category))].map((category) => ({
    label: category,
    value: createCategorySlug(category),
  }));

  const activeQuery = searchParams.get("query")?.trim() ?? "";
  const categoryParam = searchParams.get("category");
  const motorcycleParam = searchParams.get("motorcycle");

  const activeCategory = categories.some(({ value }) => value === categoryParam)
    ? categoryParam
    : null;

  const activeMotorcycle = motorcycles.some(({ slug }) => slug === motorcycleParam)
    ? motorcycleParam
    : null;

  const query = activeQuery.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const searchableText = `${product.name} ${product.category} ${product.series}`.toLowerCase();

    return (
      (!query || searchableText.includes(query)) &&
      (!activeCategory || createCategorySlug(product.category) === activeCategory) &&
      (!activeMotorcycle || product.compatibleMotorcycles.includes(activeMotorcycle))
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));
  const requestedPage = Math.floor(Number(searchParams.get("page"))) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const firstProductIndex = (currentPage - 1) * productsPerPage;

  const visibleProducts = filteredProducts.slice(
    firstProductIndex,
    firstProductIndex + productsPerPage,
  );

  const hasActiveFilters = Boolean(activeQuery || activeCategory || activeMotorcycle);

  const createUrl = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(updates)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    const queryString = params.toString();

    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  const updateFilter = (key: "category" | "motorcycle", value: string | null) => {
    router.replace(createUrl({ [key]: value === "all" ? null : value, page: null }), {
      scroll: false,
    });
  };

  const handleSearch = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("query") ?? "").trim();

    router.replace(createUrl({ query: query || null, page: null }), { scroll: false });
  };

  const clearFilters = () => router.replace(pathname, { scroll: false });

  return (
    <div className="mt-10">
      <div className="border-border bg-card grid gap-3 rounded-xl border p-3 md:grid-cols-[minmax(0,1fr)_13rem_17rem_auto] md:items-center">
        <form onSubmit={handleSearch} className="relative min-w-0">
          <Input
            key={activeQuery}
            id="product-search"
            name="query"
            defaultValue={activeQuery}
            placeholder="Search products"
            className="bg-background w-full"
          />
          <Button
            variant="link"
            size="icon"
            type="submit"
            aria-label="Search products"
            className="top-0.3 absolute right-1.5 cursor-pointer"
          >
            <Search aria-hidden="true" className="size-4" />
          </Button>
        </form>

        <Select
          value={activeCategory ?? "all"}
          onValueChange={(value) => updateFilter("category", value)}
        >
          <SelectTrigger className="bg-background h-11 w-full px-3">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent align="start" sideOffset={8}>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={activeMotorcycle ?? "all"}
          onValueChange={(value) => updateFilter("motorcycle", value)}
        >
          <SelectTrigger
            className="bg-background h-11 w-full px-3"
            aria-label="Filter by motorcycle"
          >
            <SelectValue placeholder="All motorcycles" />
          </SelectTrigger>
          <SelectContent align="start" sideOffset={8}>
            <SelectItem value="all">All Motorcycles</SelectItem>
            {motorcycles.map((motorcycle) => (
              <SelectItem key={motorcycle.id} value={motorcycle.slug}>
                {motorcycle.make} {motorcycle.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          type="button"
          variant="ghost"
          disabled={!hasActiveFilters}
          onClick={clearFilters}
          className="h-11 cursor-pointer px-3 uppercase md:justify-self-end"
        >
          <X />
          Clear
        </Button>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm" aria-live="polite">
          {filteredProducts.length === 1 ? "1 product" : `${filteredProducts.length} products`}
        </p>
        {filteredProducts.length > 0 && (
          <p className="text-muted-foreground text-xs">
            Showing {firstProductIndex + 1}–
            {Math.min(firstProductIndex + productsPerPage, filteredProducts.length)}
          </p>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="mt-5 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => {
            const primaryImage = product.images[0];

            return (
              <article key={product.id}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group/product focus-visible:ring-ring focus-visible:ring-offset-background block h-full rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <div className="border-border bg-muted relative isolate aspect-square overflow-hidden rounded-xl border">
                    {primaryImage ? (
                      <Image
                        fill
                        src={primaryImage}
                        alt=""
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-6 transition-transform duration-300 group-hover/product:scale-[1.05]"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                        <div className="bg-primary absolute -top-10 -right-10 size-36 rotate-12 rounded-3xl opacity-90" />
                        <div className="bg-secondary absolute -bottom-8 -left-8 size-24 rounded-full" />
                        <ImageIcon className="text-muted-foreground relative size-8" />
                      </div>
                    )}
                  </div>

                  <div className="px-1 pt-4">
                    <p className="text-primary text-xs font-semibold tracking-[0.14em] uppercase">
                      {product.category}
                    </p>
                    <h2 className="font-display text-foreground group-hover/product:text-primary mt-2 text-3xl leading-none tracking-tight uppercase transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">{product.series}</p>

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
      ) : (
        <div className="border-border bg-card mt-5 grid min-h-80 place-items-center rounded-xl border border-dashed px-6 py-16 text-center">
          <div>
            <h2 className="font-display text-foreground text-4xl uppercase">No products found.</h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-md text-sm leading-6">
              Try another search or clear your filters to browse the complete BOMX catalog.
            </p>
            <Button type="button" onClick={clearFilters} className="mt-6 cursor-pointer uppercase">
              Clear Filters
            </Button>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={currentPage > 1 ? createUrl({ page: String(currentPage - 1) }) : undefined}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
                className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href={createUrl({ page: pageNumber === 1 ? null : String(pageNumber) })}
                    isActive={pageNumber === currentPage}
                    aria-label={`Go to page ${pageNumber}`}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href={
                  currentPage < totalPages
                    ? createUrl({ page: String(currentPage + 1) })
                    : undefined
                }
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
                className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ProductCatalog;
