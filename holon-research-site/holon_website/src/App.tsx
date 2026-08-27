
import React, { useRef, useState } from 'react';

export function App() {
  const betaDialogRef = useRef<HTMLDialogElement>(null);
  const [betaFormStatus, setBetaFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const openBetaForm = () => {
    setBetaFormStatus('idle');
    betaDialogRef.current?.showModal();
  };

  const submitBetaForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBetaFormStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = formData.get('phone');

    if (typeof phone === 'string') {
      formData.set('phone', `+1 ${phone.trim()}`);
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setBetaFormStatus('success');
    } catch {
      setBetaFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-200">
      <main className="max-w-3xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-32 md:gap-48">

        {/* Hero */}
        <section className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">Holon Research</h1>
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-base md:text-lg leading-relaxed text-neutral-600">
              Infrastructure for Private AI, made easy.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-neutral-600">
              AI agents are shaping how individuals and companies think, decide, and act. We consider it a necessity that everyone should own their intelligence.
            </p>
          </div>
          <div className="w-fit max-w-full rounded-xl bg-neutral-100 px-4 py-3">
            <p className="text-sm leading-relaxed text-neutral-600">
              Bay area residents: Holon is giving out beta units, join the program{' '}
              <button
                type="button"
                onClick={openBetaForm}
                className="underline decoration-neutral-400 underline-offset-4 hover:text-neutral-900">
                here
              </button>
              .
            </p>
          </div>
        </section>

        {/* Section 2: Model Runtime */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg md:text-xl font-medium text-neutral-900">Model runtime</h2>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-600">
                Run open-source models with just a few clicks.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base text-neutral-400">
              <span>pre-loaded tuned models</span>
              <span>per-user session caching</span>
              <span>load multiple models</span>
            </div>
          </div>
          <figure className="w-full">
            <video
              src="/holon_home.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-xl border border-neutral-100 shadow-sm bg-neutral-50" />

          </figure>
        </section>

        {/* Section 3: Harness */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg md:text-xl font-medium text-neutral-900">Harness</h2>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-600">
                A local-first harness designed to work with our model runtime
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base text-neutral-400">
              <span>unlimited web search/deep research</span>
              <span>-40% token ingestion</span>
              <span>on-device sandboxes</span>
            </div>
          </div>
          <figure className="w-full">
            <img
              src="/Screenshot_2026-08-26_at_11.52.01_PM.png"
              alt="Holon Agent"
              className="w-full h-auto rounded-xl border border-neutral-100 shadow-sm bg-neutral-50" />

          </figure>
        </section>

        {/* Section 4: Knowledge Packs */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-medium text-neutral-900">Knowledge packs</h2>
            <div className="flex flex-col gap-1">
              <p className="text-lg md:text-xl leading-relaxed text-neutral-600">
                Skip prefill for stable docs.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-neutral-400">
                docs/md/text -&gt; pre-computed kv cache that load into any session.
              </p>
            </div>
          </div>
          <figure className="w-full">
            <img
              src="/image.png"
              alt="Knowledge Packs Interface"
              className="w-full h-auto rounded-xl border border-neutral-100 shadow-sm bg-neutral-50" />

          </figure>
        </section>

        {/* Section 5: Hardware */}
        <section className="flex flex-col gap-5">
          <div className="w-full border border-neutral-200 rounded-2xl overflow-hidden bg-neutral-50/50">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200">

              {/* Individual Column */}
              <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-base font-medium text-neutral-900">For individuals.</h3>
                  <ul className="flex flex-col gap-2 text-sm text-neutral-600">
                    <li>Ryzen AI Max+ 395</li>
                    <li>64GB of unified memory</li>
                    <li>1TB M.2 Drive</li>
                  </ul>
                </div>
                <div>
                  <a
                    href="https://buy.stripe.com/aFaaEY5rTaY159Oeg33Je01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-neutral-900 bg-neutral-200 rounded-full hover:bg-neutral-300 transition-colors">

                    secure spot
                  </a>
                </div>
              </div>

              {/* Team Column */}
              <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-base font-medium text-neutral-900">For teams 1-10.</h3>
                  <ul className="flex flex-col gap-2 text-sm text-neutral-600">
                    <li>4xAMD Radeon AI PRO R9700 32GB GDDR6</li>
                    <li>128GB of DDR5 Ram</li>
                    <li>AMD Ryzen Threadripper PRO 9965WX</li>
                    <li>8TB M.2 Drive</li>
                  </ul>
                </div>
                <div>
                  <a
                    href="https://calendly.com/sayyss-holon-research/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-neutral-900 bg-neutral-200 rounded-full hover:bg-neutral-300 transition-colors">

                    book build slot
                  </a>
                </div>
              </div>

            </div>
          </div>

          <dialog
            ref={betaDialogRef}
            aria-labelledby="holon-beta-title"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                betaDialogRef.current?.close();
              }
            }}
            className="fixed inset-0 m-auto w-[calc(100%-3rem)] max-w-md rounded-2xl border border-neutral-200 bg-white p-0 text-neutral-900 shadow-xl backdrop:bg-black/20">
            <div className="relative p-6 md:p-8">
              <button
                type="button"
                onClick={() => betaDialogRef.current?.close()}
                aria-label="Close beta form"
                className="absolute right-5 top-4 text-xl leading-none text-neutral-400 hover:text-neutral-900">
                ×
              </button>

              <div className="mb-6 border-b border-neutral-200 pb-4 pr-8">
                <h2 id="holon-beta-title" className="text-xl font-medium tracking-tight text-neutral-900">
                  Holon Beta program
                </h2>
                <p className="mt-1 text-sm text-neutral-500">3/10 filled.</p>
              </div>

              {betaFormStatus === 'success' ? (
                <p className="pr-6 text-base leading-relaxed text-neutral-600" role="status">
                  <span className="block">Sayyam here! Founder of Holon Research.</span>
                  <span className="mt-2 block">I will get in touch with you shortly, glad to have caught your attention!</span>
                </p>
              ) : (
                <form
                  action="https://formspree.io/f/myeygqdp"
                  method="POST"
                  onSubmit={submitBetaForm}
                  className="flex flex-col gap-5">
                  <label className="flex flex-col gap-2 text-sm text-neutral-700">
                    Name
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-base outline-none transition focus:border-neutral-500" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-neutral-700">
                    Email
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      className="rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-base outline-none transition focus:border-neutral-500" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-neutral-700">
                    Phone
                    <span className="flex items-center rounded-lg border border-neutral-200 bg-white focus-within:border-neutral-500">
                      <span className="pl-3 text-base text-neutral-500">+1</span>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel-national"
                        inputMode="tel"
                        required
                        className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-base outline-none" />
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={betaFormStatus === 'submitting'}
                    className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-300 disabled:cursor-wait disabled:opacity-60">
                    join beta
                  </button>
                  {betaFormStatus === 'error' && (
                    <p className="text-sm text-neutral-600" role="alert">
                      Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </dialog>
        </section>

        {/* Section 6: FAQ */}
        <section className="flex flex-col gap-12 pt-12 border-t border-neutral-100">
          <h2 className="text-lg md:text-xl font-medium text-neutral-900">FAQ</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-neutral-900">What models can I run?</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                Anything from Huggingface that fits. We regularly test and optimize newly released models for Holon’s specific build. We preload Gemma 4 26B, Qwen 3.6 35B, Qwen 3.8 27B, and GPT-OSS 20B out of the box.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-neutral-900">Do I need to set anything up other than plugging it in and connecting it to wifi?</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                No, obviously.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-neutral-900">Can I use other coding agents?</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                Yes. You can use any coding agent you want. We offer plugins for Codex/Opencode/Pi to allow them to use Holon’s model runtime.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-neutral-900">How is web search/deep research unlimited?</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                It’s self-hosted on-device :)
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-neutral-900">Can I load multiple models at once?</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                Yes, if they fit.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-neutral-900">Are knowledge packs transferable across models?</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                Yes. Holon can schedule nightly rebuilds that makes it seamless to use the same knowledge packs across models.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>);

}
