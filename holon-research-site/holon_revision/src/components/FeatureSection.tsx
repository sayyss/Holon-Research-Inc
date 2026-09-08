import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { SandboxGrid } from './SandboxGrid';
import { SupportedModelsDialog } from './SupportedModelsDialog';
import type { Feature } from '../data/features';

type FeatureSectionProps = {
  feature: Feature;
};

export function FeatureSection({ feature }: FeatureSectionProps) {
  const { id, title, lede, note, specs, supportedModelsLink, mediaWidth, media } = feature;
  const [modelsOpen, setModelsOpen] = useState(false);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-hairline-soft pt-10 md:pt-16">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2
              id={`${id}-title`}
              className="font-display text-[1.75rem] font-light leading-tight tracking-tight text-ink md:text-[2rem]">

              {title}
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.8] text-ink-soft">{lede}</p>
            {note && <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-ink-muted">{note}</p>}
            {specs &&
            <ul className="mt-8 flex flex-col">
                {specs.map((spec) =>
              <li
                key={spec}
                className="border-t border-hairline-soft py-3 font-mono text-[11px] tracking-[0.04em] text-ink-muted last:border-b">

                    {spec}
                  </li>
              )}
              </ul>
            }
            {supportedModelsLink &&
            <button
              type="button"
              onClick={() => setModelsOpen(true)}
              className="mt-6 border-b border-ink/25 pb-0.5 text-[13px] text-ink transition-colors duration-200 ease-premium hover:border-ink">

                Supported models
              </button>
            }
          </div>
        </div>

        <Reveal className="md:col-span-8">
          {media.kind === 'sandboxes' ?
          <SandboxGrid /> :
          <figure className={mediaWidth ?? ''}>
            <div className="overflow-hidden rounded-[18px] bg-[#EFEFF1] p-2.5 shadow-[0_1px_2px_rgba(8,9,10,0.04),0_40px_80px_-56px_rgba(8,9,10,0.35)]">
              {media.kind === 'video' ?
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-full rounded-[11px] bg-canvas" /> :


              <img
                src={media.src}
                alt={media.alt ?? ''}
                className="h-auto w-full rounded-[11px] bg-canvas" />

              }
            </div>
          </figure>
          }
        </Reveal>
      </div>

      {supportedModelsLink &&
      <SupportedModelsDialog open={modelsOpen} onClose={() => setModelsOpen(false)} />
      }
    </section>);

}
