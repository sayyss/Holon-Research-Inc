import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease }}
        className="flex flex-col gap-5">

        <h1 className="font-display text-[3.5rem] font-light leading-[0.94] tracking-[-0.025em] text-ink sm:text-7xl md:text-[6.5rem]">
          Holon Research, Inc
        </h1>
        <p className="font-display text-xl font-light italic leading-snug tracking-tight text-ink-soft md:text-3xl">
          Infrastructure for private intelligence.
        </p>
      </motion.div>
    </section>);

}