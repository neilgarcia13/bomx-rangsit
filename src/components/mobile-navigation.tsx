"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type MobileNavigationProps = {
  links: ReadonlyArray<{
    href: string;
    label: string;
  }>;
};

const MobileNavigation = ({ links }: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="text-foreground hover:bg-muted focus-visible:ring-ring focus-visible:ring-offset-background inline-flex size-10 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </PopoverTrigger>

        <PopoverContent
          id="mobile-navigation"
          align="end"
          sideOffset={8}
          className="border-border bg-popover w-[min(calc(100vw-2rem),20rem)] border p-2 shadow-lg ring-0"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onNavigate={() => setOpen(false)}
                className="text-popover-foreground uppercase hover:bg-muted hover:text-primary focus-visible:ring-ring rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileNavigation;
