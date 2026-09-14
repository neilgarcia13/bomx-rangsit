"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CommunityStory = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type CommunityStoryCarouselProps = {
  stories: CommunityStory[];
};

const CommunityStoryCarousel = ({ stories }: CommunityStoryCarouselProps) => {
  return (
    <Carousel
      opts={{ align: "start" }}
      aria-label="BOMX community stories"
      className="mt-10 sm:mt-12"
    >
      <CarouselContent className="ml-0">
        {stories.map((story, index) => (
          <CarouselItem key={story.title} className="pl-0">
            <article className="border-border bg-card grid overflow-hidden rounded-xl border lg:grid-cols-2">
              <div className="bg-muted relative isolate aspect-4/3 overflow-hidden lg:aspect-auto lg:min-h-120">
                <Image
                  fill
                  src={story.image}
                  alt={story.imageAlt}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex min-h-72 flex-col justify-center p-6 sm:p-10 lg:min-h-120 lg:p-12 xl:p-16">
                <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                  {story.label}
                </p>
                <h3 className="font-display text-foreground mt-4 text-4xl leading-none tracking-tight uppercase sm:text-5xl lg:text-6xl">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mt-5 max-w-lg text-base leading-7 sm:text-lg">
                  {story.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <CarouselPrevious className="border-border bg-background hover:bg-muted static size-10 translate-none" />
                  <CarouselNext className="border-border bg-background hover:bg-muted static size-10 translate-none" />
                  <span className="text-muted-foreground ml-2 text-xs font-semibold tracking-[0.14em] uppercase">
                    {String(index + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CommunityStoryCarousel;
export type { CommunityStory };
