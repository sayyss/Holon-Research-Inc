import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-onyx text-onyx-text md:mt-32">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-display text-[2.25rem] font-light leading-[1.1] tracking-tight text-white md:text-[3.25rem]">
              Own your intelligence.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-5">
            <a
              href="https://calendly.com/sayyss-holon-research/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-onyx transition-transform duration-150 ease-premium hover:-translate-y-[1px]">

              Talk to us
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform duration-150 ease-premium group-hover:translate-x-0.5"
                aria-hidden="true" />

            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-onyx-line pt-6 sm:flex-row sm:items-baseline sm:justify-between md:mt-28">
          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-lg leading-none tracking-tight text-white">Holon</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-onyx-text-soft">
              Research
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-onyx-text-soft">
            Private by default
          </span>
        </div>
      </div>
    </footer>);

}