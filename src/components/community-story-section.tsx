import CommunityStoryCarousel, { type CommunityStory } from "@/components/community-story-carousel";
import ScrollReveal from "@/components/scroll-reveal";

const communityStories: CommunityStory[] = [
  {
    label: "Performance Builds",
    title: "Built for Performance",
    description:
      "Performance-focused motorcycles put purposeful upgrades at the center, bringing together function, control, and a distinctive BOMX finish.",
    image: "/images/community/performance.webp",
    imageAlt: "BOMX-equipped performance motorcycle",
  },
  {
    label: "Rider Gatherings",
    title: "At the Events",
    description:
      "Events bring motorcycles, ideas, and riders into one place—a setting where every build can be experienced beyond the workshop.",
    image: "/images/community/events.webp",
    imageAlt: "BOMX motorcycles and riders at a community event",
  },
  {
    label: "Show Builds",
    title: "Made to Be Seen",
    description:
      "From refined details to bold finishing choices, every visible component contributes to a motorcycle with its own unmistakable presence.",
    image: "/images/community/show-builds.webp",
    imageAlt: "Detailed BOMX show motorcycle build",
  },
  {
    label: "BOMX Community",
    title: "With the Community",
    description:
      "Shared enthusiasm connects riders and builders, turning individual motorcycles into part of a wider culture of performance and expression.",
    image: "/images/community/community.webp",
    imageAlt: "BOMX riders and builders gathered with their motorcycles",
  },
];

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
