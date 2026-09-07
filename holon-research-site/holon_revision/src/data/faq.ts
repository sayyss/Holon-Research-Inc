export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
{
  question: 'What models can I run?',
  answer:
  'Anything from Huggingface that fits. We regularly test and optimize newly released models for Holon’s specific build. We preload Gemma 4 26B, Qwen 3.6 35B and Qwen 3.8 27B out of the box. Super comes with an optimized build for DeepSeek V4 Flash and Qwen 3.8 Flash Next, plus everything from Holon.'
},
{
  question: 'Do I need to set anything up beyond plugging it in and joining wifi?',
  answer: 'No, obviously.'
},
{
  question: 'What coding agents can I use?',
  answer:
  'Any. Holon provides an OpenAI compatible API for use in any coding agent. We also offer plugins for Pi, Opencode, OMP and Codex to use Holon’s self-hosted web search and knowledge packs.'
},
{
  question: 'Are there any subscriptions?',
  answer:
  'For regular Holon, no. For Holon Super, we charge annually based on your setup for support and troubleshooting.'
},
{
  question: 'How is web search and deep research unlimited?',
  answer: 'It’s self-hosted, on-device.'
},
{
  question: 'Can I load multiple models at once?',
  answer: 'Yes, if they fit.'
},
{
  question: 'Are knowledge packs transferable across models?',
  answer:
  'Yes. Holon can schedule nightly rebuilds, which makes it seamless to use the same knowledge packs across models.'
}];