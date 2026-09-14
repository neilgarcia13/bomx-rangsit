
const socialPlatforms = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/BomRangsitThailand",
    username: "@BomRangsitThailand",
  },
  {
    title: "TikTok",
    link: "https://www.tiktok.com/@bomrangsitph",
    username: "@bomrangsitph",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-background/15 grid gap-10 border-b py-12 sm:grid-cols-2 sm:items-end sm:py-14">
          <div>
            <p className="font-display text-primary text-5xl leading-none tracking-tight uppercase">
              BOMX
            </p>
            <p className="text-background/70 mt-3 text-sm leading-6">
              Basta sa kalsada, BOMX ay laging kasama. ❤️ <br />
              For every journey, BOMX has your back.
            </p>
          </div>

          <div className="sm:justify-self-end">
            <p className="text-secondary text-xs font-semibold tracking-[0.18em] uppercase mb-3">
              Follow Us
            </p>
            {socialPlatforms.map((platform) => (
              <div key={platform.title} className="flex justify-start space-y-2 items-center gap-3">
                <span className="text-sm font-medium">{platform.title}</span>
                <a href={platform.link} target="_blank" className="text-background/50 text-xs hover:underline">
                  {platform.username}
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="text-background/50 py-6 text-xs leading-5">
          © 2026 BOMX — BOM Rangsit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
