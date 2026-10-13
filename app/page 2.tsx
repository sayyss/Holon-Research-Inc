import type { CSSProperties } from "react";

const accelerators = [
  { id: "01", load: 98 },
  { id: "02", load: 96 },
  { id: "03", load: 95 },
  { id: "04", load: 94 },
];

const telemetry = [
  { number: "01", value: "4×", label: "Accelerator" },
  { number: "02", value: "128 GB", label: "VRAM" },
  { number: "03", value: "3200 W", label: "PSU" },
  { number: "04", value: "42 °C", label: "Inlet" },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topline" aria-label="System header">
        <span className="brand">
          <span className="brand-mark" aria-hidden="true" />
          KX Systems / Compute Division
        </span>
        <span className="architecture">Open-frame thermal architecture</span>
        <span className="system-state">System nominal</span>
      </header>

      <section className="intro" aria-labelledby="hero-title">
        <p className="eyebrow">4× GPU Compute Chassis</p>
        <h1 id="hero-title">
          QUAD<span>//</span>
          <br />CORE
        </h1>
        <p className="lede">
          Four synchronized accelerators. One purpose-built thermal spine.
          Maximum parallel compute in a precise, serviceable tower.
        </p>
        <dl className="build-code">
          <dt>Platform</dt>
          <dd>QC-04 / Rev. A</dd>
          <dt>Topology</dt>
          <dd>PCIe Gen5 ×16</dd>
          <dt>Thermal mode</dt>
          <dd>Positive pressure</dd>
        </dl>
      </section>

      <section
        className="stage"
        aria-label="Cutaway rendering of a computer tower containing four horizontally stacked graphics processors"
      >
        <div className="tower-wrap">
          <div className="tower-shadow" aria-hidden="true" />
          <div className="tower">
            <div className="case-top" aria-hidden="true" />
            <div className="case-side" aria-hidden="true" />
            <div className="case-front">
              <div className="rail" aria-label="Cool air intake direction">
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
              </div>

              <div className="interior">
                <div className="busbar">
                  <span>Compute fabric / node 00</span>
                  <strong>96% aggregate load</strong>
                </div>

                <div className="gpus" aria-label="Four installed accelerator cards">
                  {accelerators.map((gpu) => (
                    <article
                      className="gpu"
                      aria-label={`GPU ${gpu.id} with two cooling fans at ${gpu.load}% load`}
                      key={gpu.id}
                    >
                      <div className="gpu-meta">
                        <span className="gpu-index">GPU // {gpu.id}</span>
                        <span className="gpu-model">Accelerator</span>
                        <span className="gpu-state">Linked · x16</span>
                      </div>
                      <div className="fans" aria-hidden="true">
                        <span className="fan" />
                        <span className="fan" />
                      </div>
                      <div className="gpu-load" aria-hidden="true">
                        <span>{gpu.load}</span>
                        <span
                          className="load-bar"
                          style={{ "--load": `${gpu.load}%` } as CSSProperties}
                        />
                        <span>%</span>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="psu">
                  <div>
                    <strong>Redundant power module</strong>
                    <span>80+ Titanium / load balanced</span>
                  </div>
                  <div className="psu-output">3.2 kW</div>
                </div>
              </div>

              <div className="exhaust">Heat out</div>
              <div className="case-id">QC-04 // Edge 01</div>
            </div>
            <div className="measure">4U accelerator bank</div>
          </div>
        </div>
      </section>

      <section className="specs" aria-label="System telemetry">
        {telemetry.map((spec) => (
          <div className="spec" key={spec.number}>
            <span className="spec-no">{spec.number}</span>
            <strong>{spec.value}</strong>
            <span>{spec.label}</span>
          </div>
        ))}
      </section>

      <div className="corner-note" aria-hidden="true">
        Engineered for sustained parallel load // 2026
      </div>
    </main>
  );
}
