"use client";

import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { contactData } from "@/lib/portfolio-data";

interface ContactSectionProps {
  data?: typeof contactData;
}

export function ContactSection({ data = contactData }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Section Header */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Connect
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {"Let's Work Together"}
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
          {
            "Have a project in mind? I'm always open to discussing new opportunities and creative ideas."
          }
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <a
              href={`mailto:${data.email}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <p className="truncate text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {data.email}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`tel:${data.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Phone
                </p>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {data.phone}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Location
                </p>
                <p className="text-sm font-medium text-foreground">
                  {data.location}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          {/* <div className="aspect-video overflow-hidden rounded-lg border border-border">
            <iframe
              src={data.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div> */}
        </div>

        {/* Right: Contact Form */}
        {/* <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
              placeholder="Jay"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none border-b-2 border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="group flex items-center gap-3 rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:opacity-90"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form> */}
      </div>
    </div>
  );
}
