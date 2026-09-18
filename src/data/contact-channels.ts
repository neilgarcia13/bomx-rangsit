import { Mail, MapPin, Phone } from "lucide-react";

import { toTelHref } from "@/lib/utils";
import type { ContactChannel } from "@/types/contact";

export const contactChannels: ContactChannel[] = [
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
    entries: [{ value: "Panipuan, Mexico, Pampanga" }],
  },
];
