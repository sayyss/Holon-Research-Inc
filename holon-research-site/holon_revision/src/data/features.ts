export type FeatureMedia = {
  kind: 'video' | 'image';
  src: string;
  alt?: string;
};

export type Feature = {
  id: string;
  title: string;
  lede: string;
  note?: string;
  specs?: string[];
  media: FeatureMedia;
};

export const features: Feature[] = [
{
  id: 'runtime',
  title: 'Model runtime',
  lede: 'Run open-source models with just a few clicks.',
  specs: ['pre-loaded tuned models', 'per-user session caching', 'load multiple models simultaneously'],
  media: {
    kind: 'video',
    src: "/home_demo.mp4"
  }
},
{
  id: 'harness',
  title: 'Harness',
  lede: 'A local-first harness designed to work with our model runtime.',
  specs: ['unlimited web search / deep research', '−40% token ingestion', 'on-device sandboxes'],
  media: {
    kind: 'image',
    src: "/Screenshot_2026-08-26_at_11.52.01_PM.png",
    alt: 'The Holon agent harness running a research task locally'
  }
},
{
  id: 'on-device-sandboxes',
  title: 'On-device sandboxes',
  lede: 'Every session gets its own secure sandbox on-device',
  media: {
    kind: 'image',
    src: '/sandboxes.png',
    alt: 'On-device sandboxes'
  }
},
{
  id: 'knowledge-packs',
  title: 'Knowledge packs',
  lede: 'Skip prefill for stable docs.',
  note: 'docs / md / text → pre-computed KV cache that loads into any session.',
  media: {
    kind: 'image',
    src: "/image.png",
    alt: 'Knowledge packs interface listing pre-computed document caches'
  }
}];
