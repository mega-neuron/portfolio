'use client'

import { useState } from 'react'
import { ExternalLink, Eye } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter)

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Section Header */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Work
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Selected Projects
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                activeFilter === category
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-border bg-transparent text-muted-foreground hover:border-accent hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="stagger-children grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group">
            {/* Image */}
            <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary">
              <img
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-foreground/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground transition-transform hover:scale-110"
                  aria-label={`Preview ${project.title}`}
                >
                  <Eye className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground transition-transform hover:scale-110"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <span className="flex-shrink-0 rounded-full border border-border px-3 py-1 text-xs capitalize text-muted-foreground">
                {project.category}
              </span>
            </div>

            {/* Tech tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="rounded bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
