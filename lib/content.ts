import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/sections')

export function getSectionContent<T>(sectionName: string): T {
  const fullPath = path.join(contentDirectory, `${sectionName}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)
  return data as T
}

export interface HeroContent {
  badge: string
  title: string
  subtitle: string
  ctaPrimary: { text: string; href: string }
  ctaSecondary: { text: string; href: string }
  trustPoints: string[]
}

export interface ProblemItem {
  id: string
  icon: string
  title: string
  text: string
}

export interface ProblemContent {
  badge: string
  title: string
  subtitle: string
  problems: ProblemItem[]
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  subtitle: string
  image: string
  description: string
  bullets: string[]
  caso: string
}

export interface AdditionalServiceItem {
  name: string
  description: string
}

export interface ServicesContent {
  badge: string
  title: string
  subtitle: string
  services: ServiceItem[]
  additionalSection: {
    title: string
    subtitle: string
    services: AdditionalServiceItem[]
  }
}

export interface StepItem {
  number: string
  title: string
  description: string
}

export interface ProcessContent {
  badge: string
  title: string
  subtitle: string
  steps: StepItem[]
}

export interface MetricItem {
  value: string
  subtitle: string
  description: string
  icon: string
}

export interface TechnologyContent {
  badge: string
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
  metrics: MetricItem[]
  carouselLabel: string
  disclaimer: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQContent {
  badge: string
  title: string
  subtitle: string
  faqs: FAQItem[]
}

export interface ContactContent {
  badge: string
  title: string
  subtitle: string
  phone: string
  email: string
  hours: string
  serviceOptions: string[]
  submitButtonText: string
}
