import MotorcycleFinderForm from "@/components/sections/find-parts/motorcycle-finder-form";
import ScrollReveal from "@/components/motion/scroll-reveal";

const FindPartsSection = () => {
  return (
    <section
      id="find-your-parts"
      className="bg-foreground text-background relative isolate scroll-mt-16 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="bg-primary absolute -top-24 -left-28 size-80 rotate-12 rounded-[4rem] opacity-80 sm:size-96" />
      <div className="bg-secondary absolute right-[12%] -bottom-16 size-36 rounded-full sm:size-48" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <ScrollReveal className="lg:col-span-6" direction="left">
          <p className="text-secondary mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
            Find Your Parts
          </p>
          <h2
            id="find-your-parts-heading"
            className="font-display max-w-2xl text-5xl leading-none tracking-tight uppercase sm:text-6xl lg:text-7xl"
          >
            What do you ride? We’ll find the fit.
          </h2>
          <p className="text-background/70 mt-5 max-w-lg text-base leading-7 sm:text-lg">
            Choose your motorcycle to explore compatible BOMX upgrades.
          </p>
        </ScrollReveal>

        <ScrollReveal className="lg:col-span-6" delay={0.1} direction="right">
          <div className="border-background/15 bg-background text-foreground ml-auto max-w-xl rounded-xl border p-5 shadow-xl sm:p-7 lg:p-8">
            <p className="text-primary mb-5 text-xs font-semibold tracking-[0.16em] uppercase">
              Motorcycle selector
            </p>
            <MotorcycleFinderForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FindPartsSection;
