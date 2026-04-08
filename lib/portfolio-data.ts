export const profileData = {
  name: 'Jaynher Zapanta',
  title: 'Full-Stack | AI Engineer',
  avatar: '/my-avatar.png',
  email: 'jaynher.de.zapanta@gmail.com',
  phone: '+63 946 906 7028',
  birthday: 'March 26, 1997',
  location: 'Angeles City, Pampanga, Philippines',
  social: {
    github: 'https://github.com/mega-neuron',
    linkedin: 'http://linkedin.com/in/jaynher-zapanta-568778362/',
  },
}

export const aboutData = {
  description: [
    "I'm a Full-Stack Developer and AI/ML Engineer specializing in building scalable web applications and intelligent systems. I combine strong software engineering fundamentals with machine learning expertise to create products that are not only functional and user-friendly, but also data-driven and future-ready.",
    "My work focuses on transforming complex problems into efficient, elegant solutions — whether that's designing seamless front-end experiences, building robust backend architectures, or developing AI-powered features. I work with modern technologies including React, Next.js, Node.js, Python, cloud platforms, and machine learning frameworks to deliver high-performance, scalable products.",
  ],
  services: [
    
    {
      icon: 'Zap',
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side solutions with Node.js, NestJS, Python, FastAPI, and modern frameworks.',
    },
    {
      icon: 'Code',
      title: 'AI/ML Engineering',
      description: 'Developing intelligent systems using Python, TensorFlow, PyTorch, and modern machine learning frameworks.',
    },
    {
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React, Next.js, TypeScript, and Tailwind CSS.',
    },
    {
      icon: 'Zap',
      title: 'Cloud Computing',
      description: 'Deploying applications and services on cloud platforms like AWS, GCP, and Azure.',
    },
  ],
  testimonials: [
    {
      avatar: '/luciano.jfif',
      name: 'Luciano Colos',
      text: 'Collaborated with Jay on a project and he was a great asset to the team.',
    },
    {
      avatar: '/keith.webp',
      name: 'Keith Bilous',
      text: 'Professional, creative, and highly skilled. Jay is the engineer you want on your team for any complex project.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'William Ross',
      text: 'Jay was hired to create a AI/ML VOD pipeline. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.',
    },
  ],
  clients: [
    { name: 'AIcademio', logo: '/aicademio.png' },
    { name: 'ClipNET', logo: '/clipnet.jfif' },
    { name: 'Mornings In the Lab', logo: '/mornings.png' },
    { name: 'Nuu Ventures', logo: '/nuuventures.jfif' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'University of Santo Tomas',
      period: '2014 — 2018',
      description:
        'Bachelor of Science in Computer Science',
    },
  ],
  experience: [
    {
      title: 'Full Stack | AI/ML Engineer',
      period: 'Oct 2025 — Present',
      description:
        'Built and maintained a FastAPI-based ML service that unified VOD processing, segment scoring, Gemini title refinement, speaker ID, frame extraction, and chat ingestion into production APIs.',
    },
    {
      title: 'Full Stack | AI Engineer',
      period: 'Feb 2023 — Present',
      description:
        'Built a Global payroll platform and developed a Financial insight and Prediction dashboard that helped small and mid-sized businesses forecast cash flow and expenses.',
    },
    {
      title: 'Full Stack Developer',
      period: 'March 2020 — Oct 2022',
      description:
        'Developing AI-driven tools that help radiologists review and manage medical images faster.',
    },
    {
      title: 'Full Stack Engineer',
      period: 'Feb 2017 — Aug 2019',
      description:
        'Built AI-powered tools to make document search and summarization faster and smarter for legal professionals.',
    },
  ],
  skills: [
    { name: 'Frontend Development', level: 100 },
    { name: 'Backend Development', level: 90 },
    { name: 'AI/ML Engineering', level: 85 },
    { name: 'Cloud Computing', level: 80 },
    { name: 'Database Design', level: 95 },
  ],
}

export const portfolioData = {
  categories: ['all'],
  projects: [
    {
      title: 'AI Learning platform',
      category: 'Web Development',
      image: '/portfolio/aicademio.png',
      description: 'Production-grade AI education platform with interactive courses, challenges, quizzes, and hands-on lesson flows',
      tech: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Stripe', 'React Native'],
      liveUrl: 'https://aicademio.com',
      githubUrl: 'https://github.com/Aicademio/aicademio',
    },
    {
      title: 'Multimodal AI system that analyzes stream VODs and chat activity',
      category: 'AI/ML Development',
      image: '/portfolio/pipeline-flow.png',
      description: `Designed ML APIs for end-to-end pipeline stages: transcription, frame extraction, segment scoring, and clip selection.`,
      tech: ['Python', 'Fast API', 'Next.js', 'PostgreSQL'],
      liveUrl: 'https://video-on-demand.jaynher.com',
      githubUrl: 'https://github.com/jaynher-zapanta/video-on-demand',
    },    
  ],
}

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
    {
      title: 'The Art of UI/UX: Creating Delightful Experiences',
      category: 'Design',
      date: 'Feb 28, 2024',
      readTime: '6 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Principles of exceptional UI/UX design for interfaces users love.',
      tags: ['Design', 'UI/UX', 'Frontend'],
      slug: 'art-of-uiux-delightful-experiences',
    },
    {
      title: 'TypeScript Best Practices for Large-Scale Applications',
      category: 'Development',
      date: 'Feb 20, 2024',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-best-practices',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      category: 'Development',
      date: 'Feb 12, 2024',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt: 'Implement real-time features using WebSockets and modern frameworks.',
      tags: ['WebSockets', 'Real-time', 'Backend'],
      slug: 'realtime-apps-websockets',
    },
    {
      title: 'Mastering CSS Grid and Flexbox Layouts',
      category: 'Design',
      date: 'Feb 5, 2024',
      readTime: '7 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Modern CSS layout techniques with practical examples.',
      tags: ['CSS', 'Layout', 'Frontend'],
      slug: 'mastering-css-grid-flexbox',
    },
  ],
}

export const contactData = {
  email: 'jaynher.de.zapanta@gmail.com',
  phone: '+63 946 906 7028',
  location: 'Angeles City, Pampanga, Philippines',
}
