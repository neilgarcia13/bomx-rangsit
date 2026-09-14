import Image from "next/image";
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
        <Link href="/">
          <Image
            src="/images/brand/bomx-logo.svg"
            alt=""
            width={1280}
            height={1280}
            className="size-12 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-background after:bg-primary relative rounded-sm py-1 text-sm font-medium uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
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
