import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { machines } from '../data/hardware';

export function HardwareSection() {
  return (
    <section id="hardware" aria-labelledby="hardware-title" className="border-t border-hairline-soft pt-10 md:pt-14">
      <div className="flex flex-col gap-3">
        <h2 id="hardware-title" className="font-display text-3xl leading-tight tracking-tight text-ink md:text-[2.5rem]">
          The machines
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-12">
        {machines.map((machine) =>
        <article
          key={machine.id}
          className={`flex flex-col rounded-[14px] border border-hairline bg-surface p-7 md:p-9 ${
          machine.featured ?
          'md:col-span-7 shadow-[0_1px_2px_rgba(14,15,17,0.04),0_24px_60px_-40px_rgba(14,15,17,0.28)]' :
          'md:col-span-5'}`
          }>

            <h3
            className={`font-display tracking-tight text-ink ${
            machine.featured ? 'text-3xl md:text-[2.25rem]' : 'text-2xl md:text-[1.75rem]'} leading-tight`
            }>

              {machine.name}
            </h3>
            <p className="mt-3 max-w-sm text-[15px] leading-[1.7] text-ink-soft">{machine.description}</p>

            <dl className="mt-8 flex flex-col border-t border-hairline-soft">
              {machine.specs.map((spec) =>
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-6 border-b border-hairline-soft py-3">

                  <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {spec.label}
                  </dt>
                  <dd className="text-right text-[13px] text-ink">{spec.value}</dd>
                </div>
            )}
            </dl>

            <div className="mt-auto pt-9">
              <a
              href={machine.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-transform duration-150 ease-premium hover:-translate-y-[1px] ${
              machine.featured ?
              'bg-ink text-canvas' :
              'border border-ink/20 text-ink hover:border-ink/40'}`
              }>

                {machine.cta.label}
                <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform duration-150 ease-premium group-hover:translate-x-0.5"
                aria-hidden="true" />

              </a>
            </div>
          </article>
        )}
      </div>
    </section>);

}