import Image from "next/image";

import ScrollReveal from "@/components/scroll-reveal";
import { FacebookIcon, TiktokIcon } from "@/components/social-icons";

const socialPlatforms = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/BomRangsitThailand",
    username: "@BomRangsitThailand",
    icon: FacebookIcon,
  },
  {
    title: "TikTok",
    link: "https://www.tiktok.com/@bomrangsitph",
    username: "@bomrangsitph",
    icon: TiktokIcon,
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <ScrollReveal className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" direction="none">
        <div className="border-background/15 grid gap-10 border-b py-12 sm:grid-cols-2 sm:items-end sm:py-14">
          <div>
            <Image
              src="/images/brand/bomx-logo.svg"
              alt="BOMX logo"
              width={1280}
              height={1280}
              loading="eager"
              className="size-28 object-contain"
            />
            <p className="text-background/70 mt-3 text-sm leading-6">
              Basta sa kalsada, BOMX ay laging kasama. ❤️ <br />
              For every journey, BOMX has your back.
            </p>
          </div>

          <div className="sm:justify-self-end">
            <p className="text-secondary mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
              Follow Us
            </p>
            <ul className="space-y-3">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;

                return (
                  <li key={platform.title}>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group focus-visible:ring-secondary focus-visible:ring-offset-foreground -m-1 flex items-center gap-3 rounded-md p-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      <span className="bg-background/10 text-background group-hover:bg-primary group-hover:text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                        <Icon className="size-4.5" />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="text-sm font-medium">{platform.title}</span>
                        <span className="text-background/50 group-hover:text-background/80 text-xs transition-colors">
                          {platform.username}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <p className="text-background/50 py-6 text-xs leading-5">
          © 2026 BOMX — BOM Rangsit. All rights reserved.
        </p>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
