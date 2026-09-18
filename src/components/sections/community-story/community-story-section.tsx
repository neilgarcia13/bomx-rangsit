import ScrollReveal from "@/components/motion/scroll-reveal";
import { communityStories } from "@/data/community-stories";

import CommunityStoryCarousel from "./community-story-carousel";

const CommunityStorySection = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl">
          <p className="text-primary mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
            BOMX Community
          </p>
          <h2 className="font-display text-foreground text-4xl leading-none tracking-tight uppercase sm:text-5xl lg:text-6xl">
            Built for the ride. Proven together.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-6 sm:text-base">
            From performance builds to community events, BOMX is shaped by the motorcycles and
            riders that put every component into action.
          </p>
        </ScrollReveal>

        <CommunityStoryCarousel stories={communityStories} />
      </div>
    </section>
  );
};

export default CommunityStorySection;
