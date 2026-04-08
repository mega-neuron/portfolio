import { aboutData } from "@/lib/portfolio-data";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Testimonials */}
      <div>
        <p className="mb-8 text-sm font-medium uppercase tracking-widest text-accent">
          Feedback
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {aboutData.testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              <Quote className="mb-4 h-6 w-6 text-accent/30" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Marquee */}
      <div>
        <p className="mb-8 text-sm font-medium uppercase tracking-widest text-accent">
          Trusted By
        </p>
        <div className="relative overflow-hidden rounded-lg border border-border bg-card py-8">
          <div className="flex gap-12 animate-marquee">
            {[...aboutData.clients, ...aboutData.clients].map(
              (client, index) => (
                <div
                  key={index}
                  className="flex h-12 w-28 flex-shrink-0 items-center justify-center md:h-14 md:w-36"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="h-full w-full object-contain opacity-50 transition-opacity hover:opacity-100"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
