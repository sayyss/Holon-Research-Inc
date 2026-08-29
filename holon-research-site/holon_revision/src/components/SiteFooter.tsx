import React from 'react';

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-baseline md:justify-between md:px-10">
        <div className="flex items-baseline gap-2.5">
          <span className="font-display text-lg leading-none tracking-tight text-ink">Holon</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Research</span>
        </div>
        <a
          href="https://calendly.com/sayyss-holon-research/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap border-b border-ink/20 pb-0.5 text-[13px] text-ink transition-colors duration-200 ease-premium hover:border-ink">

          Talk to us
        </a>
      </div>
    </footer>);

}