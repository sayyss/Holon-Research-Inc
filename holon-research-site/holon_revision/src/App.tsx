import React from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { HardwareSection } from './components/HardwareSection';
import { FaqSection } from './components/FaqSection';
import { SiteFooter } from './components/SiteFooter';
import { features } from './data/features';

export function App() {
  return (
    <div className="min-h-screen w-full bg-canvas font-sans text-ink antialiased selection:bg-ink/10">
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 md:gap-32 md:px-10 md:pb-32">
        <Hero />
        {features.map((feature) =>
        <FeatureSection key={feature.id} feature={feature} />
        )}
        <HardwareSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>);

}