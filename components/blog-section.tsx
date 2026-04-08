import { ArrowUpRight, Clock } from 'lucide-react'
import { blogData } from '@/lib/portfolio-data'

interface BlogSectionProps {
  data?: typeof blogData
}

export function BlogSection({ data = blogData }: BlogSectionProps) {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* Section Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Insights
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Latest Writings
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thoughts on design, development, and the craft of building for the web.
        </p>
      </div>

      {/* Featured Post */}
      <a
        href={`/blog/${data.posts[0].slug}`}
        className="group grid grid-cols-1 gap-8 overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent/30 md:grid-cols-2"
      >
        <div className="aspect-video overflow-hidden bg-secondary md:aspect-auto md:min-h-[320px]">
          <img
            src={data.posts[0].image || '/placeholder.svg'}
            alt={data.posts[0].title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {data.posts[0].category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {data.posts[0].readTime}
            </span>
          </div>
          <h3 className="mb-3 font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-accent md:text-3xl text-balance">
            {data.posts[0].title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {data.posts[0].excerpt}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-accent">
            Read Article
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </a>

      {/* Post List */}
      <div className="space-y-0">
        {data.posts.slice(1).map((post, index) => (
          <a
            key={index}
            href={`/blog/${post.slug}`}
            className="group grid grid-cols-1 items-center gap-4 border-t border-border py-7 transition-colors md:grid-cols-[1fr_auto_auto]"
          >
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-medium text-accent">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                {post.title}
              </h3>
            </div>
            <div className="hidden flex-wrap gap-2 md:flex">
              {post.tags.slice(0, 2).map((tag, i) => (
                <span
                  key={i}
                  className="rounded bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ArrowUpRight className="hidden h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:block" />
          </a>
        ))}
      </div>
    </div>
  )
}
