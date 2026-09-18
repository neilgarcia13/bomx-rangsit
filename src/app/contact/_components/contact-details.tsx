import { contactChannels } from "@/data/contact-channels";
import { socialPlatforms } from "@/data/social-links";

const ContactDetails = () => {
  return (
    <div>
      <ul className="mt-8 space-y-6">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;

          return (
            <li key={channel.label} className="flex items-start gap-4">
              <span className="bg-accent text-primary flex size-11 shrink-0 items-center justify-center rounded-lg">
                <Icon className="size-5" />
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
                        className="text-foreground hover:text-primary focus-visible:ring-ring block rounded-sm text-base font-medium wrap-break-word transition-colors focus-visible:ring-2 focus-visible:outline-none"
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
