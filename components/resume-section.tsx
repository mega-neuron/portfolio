import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Section Header */}
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Experience
        </p>
        <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
          Background
          <br />
          <span className="text-muted-foreground">{'& Expertise'}</span>
        </h2>
      </div>

      {/* Experience */}
      <div>
        <p className="mb-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Work
        </p>
        <div className="space-y-0">
          {data.experience.map((item, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors md:grid-cols-[200px_1fr] md:gap-8 md:py-10"
            >
              <p className="text-sm font-medium text-accent">{item.period}</p>
              <div>
                <h4 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {item.title}
                </h4>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <p className="mb-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Education
        </p>
        <div className="space-y-0">
          {data.education.map((item, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors md:grid-cols-[200px_1fr] md:gap-8 md:py-10"
            >
              <p className="text-sm font-medium text-accent">{item.period}</p>
              <div>
                <h4 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                  {item.title}
                </h4>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <p className="mb-10 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Skills
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {data.skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="mb-3 flex items-baseline justify-between">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="font-mono text-xs text-accent">{skill.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent animate-fill-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
