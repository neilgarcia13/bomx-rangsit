import Link from "next/link";

import MobileNavigation from "@/components/mobile-navigation";

const navigationLinks = [
  { href: "/#collections", label: "Collections" },
  { href: "/#find-your-parts", label: "Find Your Parts" },
  { href: "/products", label: "Products" },
] as const;

const Header = () => {
  return (
    <header className="border-border bg-background sticky top-0 z-40 border-b">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="BOMX home"
          className="font-display text-primary focus-visible:ring-ring focus-visible:ring-offset-background text-[2rem] leading-none tracking-tight focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span>BOMX</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNavigation links={navigationLinks} />
      </div>
    </header>
  );
};

export default Header;
