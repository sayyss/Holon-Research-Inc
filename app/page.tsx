export default function Home() {
  return (
    <main>
      <header>
        <p>
          Holon <a className="research-secret-link" href="/research">Research</a>, Inc
        </p>
      </header>

      <article>
        <section>
          <h2>What do we do?</h2>
          <p>We sell AI you own instead of rent.</p>
        </section>

        <section>
          <h2>How?</h2>
          <p>We sell Holon, a computer that runs a local AI stack:</p>

          <div className="details">
            <p>
              <strong>Model runtime:</strong> Holon provides a stable runtime to
              run 24/7 agentic sessions locally. We tune and optimize every model
              that goes into the device. See supported models.
            </p>

            <p>
              <strong>Harness:</strong> Built on Pi(our favourite coding agent),
              we make local agents actually useful through intelligent routing,
              aggressive caching, and a sandboxed environment to run entirely
              on-device
            </p>

            <p>
              <strong>Improvement loop:</strong> We know local models are
              limited, that’s why we provide a fine tuning loop using
              self-distillation to improve models with your feedback. It gets
              better on your codebases as you use it!
            </p>
          </div>
        </section>

        <section>
          <h2>do I need to setup anything other than an account?</h2>
          <p>
            No, everything is already setup for you, Holon is designed for out
            of the box experience.
          </p>
        </section>

        <section>
          <h2>What hardware is it running?</h2>
          <p>
            Holon runs on AMD’s Strix Halo 395+ AI boards with 64gb of VRAM,
            running x86, which means you can host multiple locally made apps
            without deploying anywhere alongside your agents.
          </p>
        </section>

        <section>
          <h2>What else is included?</h2>
          <p>
            Self-hosted web search / deep-research for unlimited queries,
            self-hosted memory(we use Honcho), and a tailscale setup to access
            your Holon from anywhere.
          </p>
        </section>

        <section>
          <h2>How much is it?</h2>
          <p>For consumers, it&apos;s $2300.</p>
          <p>
            For enterprise, Starting at $10k. We build a custom rig that can
            serve 10 concurrent users running agentic sessions. Buy as many as
            you need.
          </p>
        </section>

        <section className="closing">
          <p>ok sounds good.... but why should I own my AI?</p>
          <p>
            Digital intelligence will be the most transformative tool you will
            use. It will interact with every aspect of your life: your work,
            your files, your conversations, your interests. Something that
            close to you should not be rented from a data center.
          </p>
        </section>

      </article>
    </main>
  );
}
