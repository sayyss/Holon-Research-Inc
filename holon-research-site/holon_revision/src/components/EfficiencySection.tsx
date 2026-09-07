import React from 'react';
import { Reveal } from './Reveal';
import { benchmarkColumns, benchmarkGroups } from '../data/benchmark';

export function EfficiencySection() {
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
            <div className="border-b border-hairline-soft p-7 md:p-8">
              <h3 className="font-display text-xl font-light leading-snug tracking-tight text-ink md:text-2xl">
                Qwen 3.6 35B-A3B Q8
              </h3>
            </div>

            <div className="overflow-x-auto">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}