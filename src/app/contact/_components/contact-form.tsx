"use client";

import type { SubmitEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactEmail = "bomxrangsit@gmail.com";

const ContactForm = () => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `BOMX inquiry from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="border-border bg-card rounded-xl border p-6 shadow-sm sm:p-8 lg:p-10">
      <h2 className="font-display text-card-foreground text-4xl leading-none tracking-tight uppercase sm:text-5xl">
        Write To Us
      </h2>
      <p className="text-muted-foreground mt-3 text-sm leading-6">
        Fill in the details below and we will reply from {contactEmail}.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-foreground text-sm font-medium">
            Name
          </label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Juan Dela Cruz"
            required
            className="bg-background h-11 px-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-foreground text-sm font-medium">
            Email
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="bg-background h-11 px-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-foreground text-sm font-medium">
            Phone Number
          </label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="0900-000-0000"
            className="bg-background h-11 px-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-message" className="text-foreground text-sm font-medium">
            Message
          </label>
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Tell us the part you need and the motorcycle you ride."
            required
            className="bg-background"
          />
        </div>

        <Button type="submit" size="lg" className="h-11 w-full cursor-pointer uppercase">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
