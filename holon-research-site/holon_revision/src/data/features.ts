export type FeatureMedia =
  | {
      kind: 'video' | 'image';
      src: string;
      alt?: string;
    }
  | {
      kind: 'sandboxes';
    };

export type Feature = {
  id: string;
  title: string;
  lede: string;
  note?: string;
  specs?: string[];
  supportedModelsLink?: boolean;
  /** Optional Tailwind max-width class to render the media smaller than the column. */
  mediaWidth?: string;
  media: FeatureMedia;
};

export const features: Feature[] = [
{
  id: 'runtime',
  title: 'Model runtime',
  lede: 'Run open-source models with just a few clicks.',
  specs: ['pre-loaded tuned models', 'per-user session caching', 'zero setup'],
  supportedModelsLink: true,
  media: {
    kind: 'video',
    src: "/holon_home.mp4"
  }
},
{
  id: 'sandboxes',
  title: 'On-device sandboxes',
  lede: 'Long-running agents work in isolated sandboxes on your machine.',
  media: {
    kind: 'sandboxes'
  }
},
{
  id: 'research',
  title: 'Self-hosted tools for unlimited web search / deep research',
  lede: 'Search and deep research run on your own hardware, so there are no per-query limits or external keys.',
  media: {
    kind: 'image',
    src: "/image-1.png",
    alt: 'A deep research task running on-device, showing passes, sources read and findings'
  }
},
{
  id: 'knowledge-packs',
  title: 'Knowledge packs',
  lede: 'Skip prefill for stable docs.',
  note: 'docs / md / text → pre-computed KV cache that loads into any session.',
  mediaWidth: 'max-w-md',
  media: {
    kind: 'image',
    src: "/image-2.png",
    alt: 'Knowledge packs interface listing built packs with source counts and cache sizes'
  }
}];
