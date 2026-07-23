export interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  category: ProjectCategory
  featured: boolean
}

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'ai' | 'other'

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  techStack: string[]
  logo?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description: string
  gpa?: string
}

export interface Skill {
  name: string
  icon: string
  category: SkillCategory
  level: number
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'tools' | 'languages' | 'databases'

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  url?: string
  image?: string
}

export interface TimelineItem {
  id: string
  title: string
  subtitle: string
  period: string
  description: string
  type: 'work' | 'education' | 'achievement'
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
  published: boolean
  content: string
}

export interface SocialLinks {
  github: string
  linkedin: string
  twitter?: string
  email: string
  website?: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  basePath: string
  author: {
    name: string
    email: string
    username: string
    avatar: string
    bio: string
    location: string
    available: boolean
  }
  social: SocialLinks
}
