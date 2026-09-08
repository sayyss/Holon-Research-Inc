import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { benchmarkColumns, benchmarkGroups, holonSuperBenchmarkRows } from '../data/benchmark';

type EfficiencyTab = 'holon' | 'holon-super';

export function EfficiencySection() {
  const [activeTab, setActiveTab] = useState<EfficiencyTab>('holon');

  return (
    <section
      id="efficiency"
      aria-labelledby="efficiency-title"
      className="border-t border-hairline-soft pt-10 md:pt-16">

      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2
              id="efficiency-title"
              className="font-display text-[1.75rem] font-light leading-tight tracking-tight text-ink md:text-[2rem]">

              Unmatched efficiency
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.8] text-ink-soft">
              Holon’s engine is custom tuned to fit larger than memory models with dual GPU/CPU
              execution while retaining near native GPU performance.
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-[1.8] text-ink-soft">
              Make the most of unlimited inference!
            </p>
          </div>
        </div>

        <Reveal className="md:col-span-8">
          <div className="overflow-hidden rounded-[18px] border border-hairline bg-surface">
            <div
              role="tablist"
              aria-label="Efficiency benchmarks"
              className="flex gap-7 border-b border-hairline-soft px-7 pt-5 md:px-8">
              <button
                type="button"
                role="tab"
                id="holon-tab"
                aria-selected={activeTab === 'holon'}
                aria-controls="holon-panel"
                onClick={() => setActiveTab('holon')}
                className={`border-b pb-4 text-[13px] transition-colors duration-200 ease-premium ${
                  activeTab === 'holon'
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}>
                Holon
              </button>
              <button
                type="button"
                role="tab"
                id="holon-super-tab"
                aria-selected={activeTab === 'holon-super'}
                aria-controls="holon-super-panel"
                onClick={() => setActiveTab('holon-super')}
                className={`border-b pb-4 text-[13px] transition-colors duration-200 ease-premium ${
                  activeTab === 'holon-super'
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}>
                Holon Super
              </button>
            </div>

            <div className="border-b border-hairline-soft p-7 md:p-8">
              <h3 className="font-display text-xl font-light leading-snug tracking-tight text-ink md:text-2xl">
                {activeTab === 'holon' ? 'Qwen 3.6 35B-A3B Q8' : 'Qwen 3.8 Flash Next FP8'}
              </h3>
            </div>

            {activeTab === 'holon' ?
            <div
              id="holon-panel"
              role="tabpanel"
              aria-labelledby="holon-tab"
              className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-hairline-soft">
                    <th
                      scope="col"
                      className="px-7 py-4 font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-ink-muted md:px-8">

                      Context
                    </th>
                    {benchmarkColumns.map((column) =>
                    <th key={column.name} scope="col" className="px-7 py-4 text-right md:px-8">
                        <span
                        className={`block text-[13px] font-medium ${
                        column.primary ? 'text-ink' : 'text-ink-soft'}`
                        }>

                          {column.name}
                        </span>
                        <span className="mt-1 block font-mono text-[10px] tracking-[0.08em] text-ink-muted">
                          {column.engine}
                        </span>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {benchmarkGroups.map((group) =>
                  <React.Fragment key={group.label}>
                      <tr>
                        <th
                        scope="colgroup"
                        colSpan={4}
                        className="bg-[#F4F4F6] px-7 py-2.5 font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-ink-muted md:px-8">

                          {group.label}
                        </th>
                      </tr>
                      {group.rows.map((row) =>
                    <tr key={`${group.label}-${row.context}`} className="border-b border-hairline-soft last:border-b-0">
                          <th
                        scope="row"
                        className="numeric px-7 py-4 text-[13px] font-normal text-ink-soft md:px-8">

                            {row.context}
                          </th>
                          <td className="numeric px-7 py-4 text-right text-[13px] font-medium text-ink md:px-8">
                            {row.holon}
                          </td>
                          <td className="numeric px-7 py-4 text-right text-[13px] text-ink-muted md:px-8">
                            {row.strix}
                          </td>
                          <td className="numeric px-7 py-4 text-right text-[13px] text-ink-muted md:px-8">
                            {row.spark}
                          </td>
                        </tr>
                    )}
                    </React.Fragment>
                  )}
                </tbody>
              </table>
            </div> :
            <div
              id="holon-super-panel"
              role="tabpanel"
              aria-labelledby="holon-super-tab"
              className="overflow-x-auto">
              <table className="w-full min-w-[44rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-hairline-soft">
                    {[
                      'Concurrent users',
                      'Total prefill speed',
                      'Generation speed per user',
                      'Time to first token'
                    ].map((heading) =>
                    <th
                      key={heading}
                      scope="col"
                      className="px-5 py-4 font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-ink-muted first:pl-7 last:pr-7 md:first:pl-8 md:last:pr-8">
                        {heading}
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {holonSuperBenchmarkRows.map((row) =>
                  <tr
                    key={row.concurrentUsers}
                    className="border-b border-hairline-soft last:border-b-0">
                      <th
                        scope="row"
                        className="numeric px-5 py-5 pl-7 text-[13px] font-normal text-ink md:pl-8">
                        {row.concurrentUsers}
                      </th>
                      <td className="numeric px-5 py-5 text-[13px] text-ink-soft">
                        {row.totalPrefillSpeed}
                      </td>
                      <td className="numeric px-5 py-5 text-[13px] text-ink-soft">
                        {row.generationSpeedPerUser}
                      </td>
                      <td className="numeric px-5 py-5 pr-7 text-[13px] text-ink-soft md:pr-8">
                        {row.timeToFirstToken}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            }
          </div>
        </Reveal>
      </div>
    </section>);

}
