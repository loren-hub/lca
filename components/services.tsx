import { getSectionContent, ServicesContent } from '@/lib/content'
import { ServicesView } from './services-view'

export function Services() {
  const content = getSectionContent<ServicesContent>('services')
  return <ServicesView content={content} />
}
