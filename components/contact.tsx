import { getSectionContent, ContactContent } from '@/lib/content'
import { ContactView } from './contact-view'

export function Contact() {
  const content = getSectionContent<ContactContent>('contact')
  return <ContactView content={content} />
}
