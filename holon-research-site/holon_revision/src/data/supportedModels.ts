export type ModelTier = {
  id: string;
  machine: string;
  models: string[];
};

export const modelTiers: ModelTier[] = [
{
  id: 'holon',
  machine: 'Holon',
  models: ['Qwen 3.6 35B Q8', 'Qwen 3.8 27B Q3', 'Gemma 4 26B Q8']
},
{
  id: 'holon-super',
  machine: 'Holon Super',
  models: ['DeepSeek V4 Flash', 'Qwen 3.8 Flash Next', 'GPT-OSS 120B']
}];