import React from 'react';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { FeatureSection } from './components/FeatureSection';
import { EfficiencySection } from './components/EfficiencySection';
import { HardwareSection } from './components/HardwareSection';
import { FaqSection } from './components/FaqSection';
import { SiteFooter } from './components/SiteFooter';
import { features } from './data/features';

export function App() {
  return (
    <div className="min-h-screen w-full bg-canvas font-sans text-ink antialiased selection:bg-ink/10">
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-8 md:gap-40 md:px-10">
        <Hero />
        {features.map((feature) =>
        <React.Fragment key={feature.id}>
            <FeatureSection feature={feature} />
            {feature.id === 'runtime' && <EfficiencySection />}
          </React.Fragment>
        )}
        <HardwareSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>);

}