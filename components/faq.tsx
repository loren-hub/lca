import { getSectionContent, FAQContent } from '@/lib/content'
import { FAQView } from './faq-view'

export function FAQ() {
  const content = getSectionContent<FAQContent>('faq')
  return <FAQView content={content} />
}
