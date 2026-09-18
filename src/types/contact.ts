import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type ContactChannel = {
  label: string;
  icon: LucideIcon;
  entries: {
    value: string;
    href?: string;
  }[];
};

export type SocialPlatform = {
  title: string;
  link: string;
  username: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
