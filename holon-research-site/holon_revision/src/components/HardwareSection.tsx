import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { machines } from '../data/hardware';

export function HardwareSection() {
  return (
    <section id="hardware" aria-labelledby="hardware-title" className="border-t border-hairline-soft pt-10 md:pt-16">
      <h2
        id="hardware-title"
        className="font-display text-[2.25rem] font-light leading-tight tracking-tight text-ink md:text-[3rem]">

        The machines
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-12">
        {machines.map((machine, index) =>
        <Reveal
          key={machine.id}
          delay={index * 0.05}
          className={machine.featured ? 'md:col-span-7' : 'md:col-span-5'}>

            <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-hairline bg-surface">
              <div
              className="h-64 w-full overflow-hidden md:h-80"
              style={{ backgroundColor: machine.image.background }}>

                <img
                src={machine.image.src}
                alt={machine.image.alt}
                className={`h-full w-full object-contain ${machine.featured ? '' : 'p-10 md:p-14'}`} />

              </div>

              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-display text-[2rem] font-light leading-tight tracking-tight text-ink md:text-[2.25rem]">
                  {machine.name}
                </h3>
                {machine.description &&
              <p className="mt-4 max-w-sm text-[15px] leading-[1.8] text-ink-soft">
                    {machine.description}
                  </p>
              }
                {machine.capacity &&
              <p
                className={`max-w-sm text-[15px] leading-[1.8] text-ink-soft ${
                machine.description ? 'mt-2' : 'mt-4'}`
                }>

                    {machine.capacity}
                  </p>
              }

                <dl className="mt-10 flex flex-col">
                  {machine.specs.map((spec) =>
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between gap-6 border-t border-hairline-soft py-3.5 last:border-b">

                      <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                        {spec.label}
                      </dt>
                      <dd className="text-right text-[13px] text-ink">{spec.value}</dd>
                    </div>
                )}
                  <div className="flex items-baseline justify-between gap-6 border-y border-hairline-soft py-3.5">
                    <dt className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                      Runs
                    </dt>
                    <dd className="text-right text-[13px] text-ink">{machine.runs.join(', ')}</dd>
                  </div>
                </dl>

                {machine.note &&
              <p className="mt-4 text-[12px] leading-relaxed text-ink-muted">{machine.note}</p>
              }

                <div className="mt-auto pt-10">
                  <a
                  href={machine.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-transform duration-150 ease-premium hover:-translate-y-[1px] ${
                  machine.featured ?
                  'bg-ink text-white' :
                  'border border-ink/20 text-ink hover:border-ink/45'}`
                  }>

                    {machine.cta.label}
                    <ArrowUpRightIcon
                    className="h-3.5 w-3.5 transition-transform duration-150 ease-premium group-hover:translate-x-0.5"
                    aria-hidden="true" />

                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        )}
      </div>
    </section>);

}