import { PenTool, Code, Smartphone, Zap, Quote } from "lucide-react";
import { aboutData } from "@/lib/portfolio-data";

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
};

interface AboutSectionProps {
  data?: typeof aboutData;
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Section Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Dedicated to Craft
            <br />
            <span className="text-muted-foreground">{"& Growth"}</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-base leading-relaxed text-muted-foreground">
            {data.description[0]}
          </p>
        </div>
      </div>

      {/* Extended description */}
      <div className="mx-auto max-w-3xl">
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {data.description[1]}
        </p>
      </div>

      {/* Services Grid */}
      <div>
        <p className="mb-8 text-sm font-medium uppercase tracking-widest text-accent">
          Services
        </p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary md:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
