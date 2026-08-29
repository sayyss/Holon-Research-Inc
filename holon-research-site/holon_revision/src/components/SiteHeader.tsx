import React from 'react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline-soft bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="group flex items-baseline gap-2.5">
          <span className="font-display text-xl leading-none tracking-tight text-ink">Holon</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted transition-colors duration-200 ease-premium group-hover:text-ink-soft">
            Research
          </span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-7">
          <a
            href="#hardware"
            className="hidden text-sm text-ink-soft transition-colors duration-200 ease-premium hover:text-ink sm:inline">

            Hardware
          </a>
          <a
            href="#faq"
            className="hidden text-sm text-ink-soft transition-colors duration-200 ease-premium hover:text-ink sm:inline">

            FAQ
          </a>
          <a
            href="https://calendly.com/sayyss-holon-research/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap border-b border-ink/30 pb-0.5 text-sm text-ink transition-colors duration-200 ease-premium hover:border-ink">

            Talk to us
          </a>
        </nav>
      </div>
    </header>);

}