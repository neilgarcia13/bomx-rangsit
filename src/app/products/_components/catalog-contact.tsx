import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const CatalogContact = () => {
  return (
    <aside className="border-border bg-card mt-14 grid gap-6 rounded-xl border p-6 sm:mt-16 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:mt-20 lg:p-10">
      <div>
        <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">Contact</p>
        <h2 className="font-display text-foreground mt-3 text-4xl leading-none tracking-tight uppercase sm:text-5xl">
          Want to know more? Message us.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-6 sm:text-base">
          Ask about availability, pricing, and in-depth product details through the BOMX Facebook
          page.
        </p>
      </div>

      <Link href="https://www.facebook.com/BomRangsitThailand" target="_blank" rel="noreferrer">
        <Button size="lg" className="h-11 w-full cursor-pointer gap-2 px-6 uppercase md:w-auto">
          View BOMX on Facebook
          <ArrowUpRight />
        </Button>
      </Link>
    </aside>
  );
};

export default CatalogContact;
