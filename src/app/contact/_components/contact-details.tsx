import { Mail, MapPin, Phone } from "lucide-react";

import { FacebookIcon, TiktokIcon } from "@/components/social-icons";

const toTelHref = (phoneNumber: string) => `tel:+63${phoneNumber.replace(/\D/g, "").slice(1)}`;

const contactChannels = [
  {
    label: "Globe",
    icon: Phone,
    entries: ["0945-624-8002", "0945-526-6420"].map((phoneNumber) => ({
      value: phoneNumber,
      href: toTelHref(phoneNumber),
    })),
  },
  {
    label: "Smart",
    icon: Phone,
    entries: ["0960-560-5856", "0928-148-0731"].map((phoneNumber) => ({
      value: phoneNumber,
      href: toTelHref(phoneNumber),
    })),
  },
  {
    label: "Email",
    icon: Mail,
    entries: [{ value: "bomxrangsit@gmail.com", href: "mailto:bomxrangsit@gmail.com" }],
  },
  {
    label: "Address",
    icon: MapPin,
    entries: [{ value: "Panipuan, Mexico, Pampanga", href: undefined }],
  },
];

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

const ContactDetails = () => {
  return (
    <div>
      <h2 className="font-display text-foreground text-4xl leading-none tracking-tight uppercase sm:text-5xl">
        Contact With Us
      </h2>
      <p className="text-muted-foreground mt-4 max-w-md text-sm leading-6">
        Reach the BOMX Rangsit team directly for availability, pricing, and fitment questions.
      </p>

      <ul className="mt-8 space-y-6">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;

          return (
            <li key={channel.label} className="flex items-start gap-4">
              <span className="bg-accent text-primary flex size-11 shrink-0 items-center justify-center rounded-lg">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-muted-foreground text-xs font-medium tracking-[0.14em] uppercase">
                  {channel.label}
                </p>
                <div className="mt-1 space-y-0.5">
                  {channel.entries.map((entry) =>
                    entry.href ? (
                      <a
                        key={entry.value}
                        href={entry.href}
                        className="text-foreground hover:text-primary focus-visible:ring-ring block rounded-sm text-base font-medium break-words transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {entry.value}
                      </a>
                    ) : (
                      <p key={entry.value} className="text-foreground text-base font-medium">
                        {entry.value}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-border mt-8 border-t pt-8">
        <p className="text-primary mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
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
                  className="group focus-visible:ring-ring -m-1 flex items-center gap-4 rounded-md p-1 focus-visible:ring-2 focus-visible:outline-none"
                >
                  <span className="bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-lg transition-colors">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-foreground text-sm font-medium">{platform.title}</span>
                    <span className="text-muted-foreground text-xs">{platform.username}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
