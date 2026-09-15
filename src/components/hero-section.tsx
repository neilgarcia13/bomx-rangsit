import Image from "next/image";
import Link from "next/link";

import HeroProductMotion from "@/components/hero-product-motion";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="border-border relative isolate overflow-hidden border-b">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <p className="text-primary mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase">
              BOMX <span aria-hidden="true" className="bg-primary h-0.5 w-8" /> Bom Rangsit
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h1 className="font-display text-foreground max-w-xl text-6xl leading-[0.88] tracking-tight uppercase sm:text-7xl lg:text-8xl">
              Built for competition.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="text-muted-foreground mt-6 max-w-md text-base leading-7 sm:text-lg">
              For every journey, BOMX has your back. Explore authentic parts for drag, circuit,
              daily, and show builds.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products">
                <Button size="lg" className="h-11 cursor-pointer px-5 uppercase">
                  Browse Products
                </Button>
              </Link>

              <Link href="#find-your-parts">
                <Button size="lg" variant="outline" className="h-11 cursor-pointer px-5 uppercase">
                  Find Your Parts
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <HeroProductMotion>
            <div className="border-border bg-muted relative isolate aspect-4/3 overflow-hidden rounded-xl border shadow-lg sm:aspect-5/4">
              <div
                aria-hidden="true"
                className="bg-primary absolute -top-20 -right-16 size-72 rotate-12 rounded-[3rem] sm:size-96"
              />
              <div
                aria-hidden="true"
                className="bg-secondary absolute -bottom-14 -left-10 size-36 rounded-full sm:size-48"
              />
              <div
                aria-hidden="true"
                className="bg-foreground absolute right-8 bottom-8 h-3 w-24 -rotate-6 sm:right-12 sm:bottom-12 sm:w-32"
              />

              <div className="absolute inset-6 z-10 grid place-items-center rounded-2xl p-6 sm:inset-16">
                <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
                  <Image
                    fill
                    preload
                    src="/images/hero/featured.webp"
                    alt="BOMX custom motorcycle at a competition event"
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </HeroProductMotion>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
