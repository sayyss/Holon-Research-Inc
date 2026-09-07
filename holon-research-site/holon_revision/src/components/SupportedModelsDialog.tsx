import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { modelTiers } from '../data/supportedModels';

const ease = [0.23, 1, 0.32, 1] as const;

type SupportedModelsDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function SupportedModelsDialog({ open, onClose }: SupportedModelsDialogProps) {
  const [activeTier, setActiveTier] = useState(modelTiers[0].id);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const tier = modelTiers.find((item) => item.id === activeTier) ?? modelTiers[0];

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]" />


          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="supported-models-title"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.24, ease }}
          className="relative w-full max-w-lg overflow-hidden rounded-[18px] border border-hairline bg-canvas shadow-[0_40px_90px_-50px_rgba(8,9,10,0.5)]">

            <div className="flex items-start justify-between gap-6 border-b border-hairline-soft p-7 md:p-8">
              <div>
                <h2
                id="supported-models-title"
                className="font-display text-2xl font-light leading-snug tracking-tight text-ink">

                  Supported models
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  Pre-loaded and tuned for each machine.
                </p>
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="-mr-1 -mt-1 rounded-full p-2 text-ink-muted transition-colors duration-200 ease-premium hover:text-ink">

                <XIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex gap-1 border-b border-hairline-soft px-7 pb-4 pt-4 md:px-8" role="tablist" aria-label="Machine">
              {modelTiers.map((item) => {
              const selected = item.id === tier.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTier(item.id)}
                  className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-200 ease-premium ${
                  selected ? 'bg-ink text-white' : 'text-ink-soft hover:text-ink'}`
                  }>

                    {item.machine}
                  </button>);

            })}
            </div>

            <div className="p-7 md:p-8">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th
                    scope="col"
                    className="border-b border-hairline-soft pb-3 font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-ink-muted">

                      {tier.machine}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tier.models.map((model) =>
                <tr key={model} className="border-b border-hairline-soft last:border-b-0">
                      <td className="py-3.5 text-[14px] text-ink">{model}</td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}