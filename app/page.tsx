const gpus = ["01", "02", "03", "04"];

const specs = [
  ["4×", "GPUs"],
  ["128 GB", "VRAM"],
  ["GEN 5", "PCIe"],
  ["3200 W", "Power"],
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="QUAD CORE home">
          QUAD<span>/</span>CORE
        </a>
        <p>System 04&nbsp;&nbsp;·&nbsp;&nbsp;Online</p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">4× GPU compute system</p>
          <h1 id="hero-title">Four GPUs.<br />One box.</h1>
          <p className="intro-copy">
            Parallel compute, reduced to the essentials. Four full-width
            accelerators in one precise, serviceable chassis.
          </p>
        </div>

        <div className="system-group">
          <section
            className="chassis"
            aria-label="Computer chassis containing four graphics processors"
          >
            <div className="chassis-head">
              <span>QC–04 / Compute chassis</span>
              <span className="status">Running</span>
            </div>

            <div className="gpu-stack" aria-label="Four installed GPUs">
              {gpus.map((gpu) => (
                <article className="gpu" key={gpu} aria-label={`GPU ${gpu}`}>
                  <div className="gpu-label">
                    <strong>GPU {gpu}</strong>
                    <span>Accelerator</span>
                  </div>
                  <div className="fans" aria-hidden="true">
                    <span className="fan" />
                    <span className="fan" />
                  </div>
                  <div className="bus" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="link">×16</span>
                </article>
              ))}
            </div>

            <div className="chassis-foot">
              <span>Positive pressure cooling</span>
              <span>3200 W</span>
            </div>
          </section>

          <aside className="capacity" aria-label="Concurrent user capacity">
            <span className="capacity-index">01 / Capacity</span>
            <p><strong>10</strong> concurrent users</p>
            <span className="capacity-note">One system.<br />Ten active seats.</span>
          </aside>
        </div>
      </section>

      <section className="spec-row" aria-label="System specifications">
        {specs.map(([value, label], index) => (
          <div className="spec" key={label}>
            <span>0{index + 1}</span>
            <strong>{value}</strong>
            <p>{label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
