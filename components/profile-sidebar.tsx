import { Github, Twitter, Instagram, ArrowDown, Linkedin } from "lucide-react";
import { profileData } from "@/lib/portfolio-data";

interface ProfileSidebarProps {
  data?: typeof profileData;
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 md:px-8">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-16 lg:gap-24">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="h-40 w-40 overflow-hidden rounded-2xl border-2 border-border bg-secondary md:h-56 md:w-56 lg:h-64 lg:w-64">
            <img
              src={data.avatar || "/placeholder.svg"}
              alt={data.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Floating status dot */}
          <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-foreground">
              Available
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            {data.title}
          </p>
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            {data.name.split(" ")[0]}{" "}
            <span className="text-muted-foreground">
              {data.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            {
              "Building thoughtful digital experiences with modern Web and AI technologies."
            }
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <span className="mx-2 h-6 w-px bg-border" />
            <a
              href={`mailto:${data.email}`}
              className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
