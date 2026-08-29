export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
{
  question: 'What models can I run?',
  answer:
  'Anything from Huggingface that fits. We regularly test and optimize newly released models for Holon’s specific build. We preload Gemma 4 26B, Qwen 3.6 35B, Qwen 3.8 27B and GPT-OSS 20B out of the box.\n\nEnterprise version runs Deepseek V4 Flash, Qwen 3.8 Flash Next, qwen 3.5 122b a10b'
},
{
  question: 'Do I need to set anything up beyond plugging it in and joining wifi?',
  answer: 'No, obviously.'
},
{
  question: 'Can I use other coding agents?',
  answer:
  'Yes. You can use any coding agent you want. We offer plugins for Codex, Opencode and Pi that let them use Holon’s model runtime.'
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
