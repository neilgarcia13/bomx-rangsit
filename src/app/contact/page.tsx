import type { Metadata } from "next";

import HeroTrackField from "@/components/backgrounds/hero-track-field";
import ScrollReveal from "@/components/motion/scroll-reveal";

import ContactDetails from "./_components/contact-details";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach BOMX — BOM Rangsit for part availability, pricing, and motorcycle fitment questions.",
};

const ContactPage = () => {
  return (
    <main className="bg-background flex-1">
      <section>
        <header className="border-border relative isolate overflow-hidden border-b py-12 sm:py-16 lg:py-20">
          <HeroTrackField variant="catalog" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-foreground mt-3 text-5xl leading-none tracking-tight uppercase sm:text-6xl lg:text-7xl">
              Let’s talk parts.
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-6 sm:text-base">
              Questions about fitment, stock, or pricing? Message the BOMX Rangsit team and we will
              point you to the right upgrade.
            </p>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-20">
          <ScrollReveal className="lg:col-span-7" direction="left">
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={0.1} direction="right">
            <ContactDetails />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
