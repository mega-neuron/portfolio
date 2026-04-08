"use client";

import { useEffect, useState } from "react";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { AboutSection } from "@/components/about-section";
import { ResumeSection } from "@/components/resume-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section-new";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  blogData,
  contactData,
} from "@/lib/portfolio-data";
import TestimonialsSection from "@/components/testimonial-section";

const navItems = [
  { id: "about", label: "About" },
  // { id: "resume", label: "Experience" },
  { id: "portfolio", label: "Projects" },
  // { id: "blog", label: "Insights" },
  { id: "contact", label: "Connect" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="#"
            className="font-serif text-lg font-bold text-foreground tracking-tight"
          >
            {profileData.name}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <ProfileSidebar data={profileData} />

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 md:px-8">
        <section id="about" className="py-20 md:py-32">
          <AboutSection data={aboutData} />
        </section>

        {/* <div className="h-px bg-border" />

        <section id="resume" className="py-20 md:py-32">
          <ResumeSection data={resumeData} />
        </section> */}

        <div className="h-px bg-border" />

        <section id="portfolio" className="py-20 md:py-32">
          <PortfolioSection data={portfolioData} />
        </section>

        {/* <div className="h-px bg-border" />

        <section id="blog" className="py-20 md:py-32">
          <BlogSection data={blogData} />
        </section> */}

        <div className="h-px bg-border" />

        <section id="skills" className="py-20 md:py-32">
          <TestimonialsSection />
        </section>

        <div className="h-px bg-border" />

        <section id="contact" className="py-20 md:py-32">
          <ContactSection data={contactData} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
          <p className="text-sm text-muted-foreground">
            {"2026 "}
            {profileData.name}. Crafted with intention.
          </p>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
