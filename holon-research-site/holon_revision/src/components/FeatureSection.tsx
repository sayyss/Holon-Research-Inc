import React from 'react';
import type { Feature } from '../data/features';

type FeatureSectionProps = {
  feature: Feature;
};

export function FeatureSection({ feature }: FeatureSectionProps) {
  const { id, title, lede, note, specs, media } = feature;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-hairline-soft pt-10 md:pt-14">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 id={`${id}-title`} className="font-display text-2xl leading-tight tracking-tight text-ink md:text-[1.75rem]">
              {title}
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-[1.75] text-ink-soft">{lede}</p>
            {note && <p className="mt-3 max-w-sm font-mono text-xs leading-relaxed text-ink-muted">{note}</p>}
            {specs &&
            <ul className="mt-7 flex flex-col border-t border-hairline-soft">
                {specs.map((spec) =>
              <li
                key={spec}
                className="border-b border-hairline-soft py-2.5 text-[13px] text-ink-soft">

                    {spec}
                  </li>
              )}
              </ul>
            }
          </div>
        </div>

        <figure className="md:col-span-8">
          <div className={`overflow-hidden rounded-[14px] border border-hairline bg-surface p-1.5 shadow-[0_1px_2px_rgba(14,15,17,0.04),0_18px_50px_-30px_rgba(14,15,17,0.22)] ${id === 'on-device-sandboxes' ? 'mx-auto w-1/2' : ''}`}>
            {media.kind === 'video' ?
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-full rounded-[9px] bg-canvas" /> :


            <img
              src={media.src}
              alt={media.alt ?? ''}
              className="h-auto w-full rounded-[9px] bg-canvas" />

            }
          </div>
        </figure>
      </div>
    </section>);

}
