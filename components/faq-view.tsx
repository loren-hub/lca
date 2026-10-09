'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQContent } from '@/lib/content'

export function FAQView({ content }: { content: FAQContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border/60 bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-medium text-primary">{content.badge}</span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-semibold text-foreground hover:text-primary transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
