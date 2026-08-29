import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faq } from '../data/faq';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-hairline-soft pt-10 md:pt-14">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="faq-title" className="font-display text-3xl leading-tight tracking-tight text-ink md:text-[2.5rem]">
            Questions
          </h2>
        </div>

        <div className="md:col-span-8">
          <ul className="flex flex-col border-t border-hairline-soft">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question} className="border-b border-hairline-soft">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="group flex w-full items-start justify-between gap-8 py-5 text-left">

                      <span className="text-[15px] leading-relaxed text-ink transition-colors duration-200 ease-premium group-hover:text-ink-soft">
                        {item.question}
                      </span>
                      <PlusIcon
                        className={`mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ease-premium ${
                        isOpen ? 'rotate-45' : ''}`
                        }
                        aria-hidden="true" />

                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden">

                        <p className="max-w-xl whitespace-pre-line pb-6 pr-12 text-[15px] leading-[1.75] text-ink-soft">
                          {item.answer}
                        </p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}
