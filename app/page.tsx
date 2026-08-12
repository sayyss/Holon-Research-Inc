export default function Home() {
  return (
    <main>
      <header>
        <p>Holon Research, Inc</p>
      </header>

      <article>
        <section>
          <h2>What do we do?</h2>
          <h1>We maximize intelligence on your desk.</h1>
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
              cache maxxing, and a sandboxed environment to run entirely
              on-device
            </p>

            <p>
              <strong>Improvement loop:</strong> We know local models have a
              limitation, that’s why we provide a fine tuning loop using
              self-distillation to improve models with your feedback. It gets
              better on your codebases as you use it!
            </p>
          </div>
        </section>

        <section>
          <h2>What hardware is it running?</h2>
          <p>
            Holon runs on AMD’s Strix Halo 395+ AI boards, running x86, which
            means you can host multiple locally made apps for your usecases
            without deploying anywhere.
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
            For enterprise, We build a custom rig that can serve 10 concurrent
            users running agentic sessions.
          </p>
        </section>
      </article>
    </main>
  );
}
