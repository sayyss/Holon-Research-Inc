import React from 'react';

const options = [
  {
    title: 'Single-use',
    details: [
      'Most token per $ machine.',
      'Includes a Model runtime',
      'local-first harness',
      'properitary caching mechanism',
      'unlimited web search/deep research',
    ],
  },
  { title: 'team(5-10)' },
];

const showOptions = false;

export function App() {
  return (
    <main className="min-h-screen w-full bg-canvas font-sans text-ink antialiased selection:bg-ink/10">
      <section className="mx-auto flex min-h-svh max-w-6xl items-center justify-center px-6 py-20 md:px-10 md:py-28">
        <header className="text-center">
          <h1 className="font-display text-[4rem] font-light leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl md:text-[6.5rem]">
            Holon Research, Inc
          </h1>
          <p className="mt-5 font-display text-2xl font-light leading-tight tracking-[-0.01em] text-ink-soft sm:text-3xl">
            Personal Inference computers.
          </p>
        </header>
      </section>

      {showOptions && (
        <section aria-label="Options" className="grid min-h-svh grid-cols-2 border-y border-hairline">
          {options.map((option, index) => (
            <article
              key={option.title}
              className={`flex flex-col items-center justify-center px-6 text-center ${index === 0 ? 'border-r border-hairline' : ''}`}
            >
              <h2 className="font-display text-2xl font-light leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
                {option.title}
              </h2>
              {option.details && (
                <ul className="mt-5 max-w-md list-none space-y-1 text-[15px] leading-[1.75] text-ink-soft">
                  {option.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
