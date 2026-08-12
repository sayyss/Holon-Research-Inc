const gpus = ["01", "02", "03", "04"];

const specs = [
  ["4×", "R9700"],
  ["128 GB", "GDDR6"],
  ["RDNA 4", "Architecture"],
  ["1200 W", "GPU TBP"],
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
          <p className="kicker">4× AMD Radeon AI PRO R9700</p>
          <h1 id="hero-title">Four R9700s.<br />One box.</h1>
          <p className="intro-copy">
            128 GB of combined GPU memory for local inference, development,
            and ten simultaneous users—inside one precise workstation.
          </p>
        </div>

        <div className="system-group">
          <section
            className="chassis"
            aria-label="Computer chassis containing four graphics processors"
          >
            <div className="chassis-head">
              <span>QC–04 / Radeon AI workstation</span>
              <span className="status">Running</span>
            </div>

            <div className="gpu-stack" aria-label="Four installed GPUs">
              {gpus.map((gpu) => (
                <article className="gpu" key={gpu} aria-label={`GPU ${gpu}`}>
                  <div className="io-bracket" aria-hidden="true">
                    <i /><i /><i /><i />
                  </div>
                  <div className="gpu-label">
                    <span>AMD Radeon</span>
                    <strong>AI PRO R9700</strong>
                    <small>GPU {gpu} · 32 GB GDDR6</small>
                  </div>
                  <div className="shroud" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                  <div className="cooler" aria-hidden="true">
                    <span className="fan" />
                    <span className="vent" />
                  </div>
                  <span className="link">PCIe 5.0<br />×16</span>
                </article>
              ))}
            </div>

            <div className="chassis-foot">
              <span>Four double-slot active cards</span>
              <span>4 × 300 W TBP</span>
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
