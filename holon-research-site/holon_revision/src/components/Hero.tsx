import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12">

        <div className="md:col-span-8">
          <h1 className="font-display text-[3.25rem] font-light leading-[0.95] tracking-[-0.02em] text-ink sm:text-6xl md:text-[5.25rem]">
            Infrastructure for
            <br />
            private AI,{' '}
            <span className="italic text-ink-soft">made easy.</span>
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:col-span-4 md:pt-3">
          <p className="max-w-sm text-[15px] leading-[1.75] text-ink-soft">
            AI is shaping how individuals and companies think, decide and act. Therefore, we believe
            it's necessary that you are able to own your intelligence.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#hardware"
              className="inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-canvas transition-transform duration-150 ease-premium hover:-translate-y-[1px]">

              See the machines
            </a>
            <a
              href="#runtime"
              className="text-sm text-ink-muted transition-colors duration-200 ease-premium hover:text-ink">

              How it works
            </a>
          </div>
        </div>
      </motion.div>
    </section>);

}