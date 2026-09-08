import React from 'react';

const sessions = [
  { name: 'auth-refactor', cpu: '18%', ram: '1 GB', running: '02:14:32', messages: '42' },
  { name: 'docs-search', cpu: '11%', ram: '1 GB', running: '01:47:09', messages: '28' },
  { name: 'test-suite', cpu: '34%', ram: '1 GB', running: '00:38:51', messages: '63' },
  { name: 'release-notes', cpu: '8%', ram: '1 GB', running: '03:26:18', messages: '19' }
];

export function SandboxGrid() {
  return (
    <div aria-label="Four running sandbox sessions" className="grid max-w-sm grid-cols-2 gap-4">
      {sessions.map((session) =>
      <article key={session.name} className="aspect-square rounded-[12px] border border-hairline bg-surface p-4">
            <h3 className="truncate font-mono text-[11px] font-medium tracking-[-0.02em] text-ink sm:text-[12px]">
              {session.name}
            </h3>

            <dl className="mt-4 space-y-2 font-mono text-[9px] leading-tight text-ink-muted sm:mt-5 sm:text-[10px]">
              <div className="flex items-baseline justify-between gap-2">
                <dt>CPU</dt>
                <dd className="numeric text-ink-soft">{session.cpu}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt>RAM</dt>
                <dd className="numeric text-ink-soft">{session.ram}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt>Running</dt>
                <dd className="numeric text-ink-soft">{session.running}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-2">
                <dt>Messages</dt>
                <dd className="numeric text-ink-soft">{session.messages}</dd>
              </div>
            </dl>
          </article>
      )}
    </div>
  );
}
