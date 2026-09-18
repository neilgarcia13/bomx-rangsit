export type Category = {
  name: string;
  slug: string;
  featured: boolean;
  imageLink: string;
};

export type CommunityStory = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
  objectPosition: string;
};
