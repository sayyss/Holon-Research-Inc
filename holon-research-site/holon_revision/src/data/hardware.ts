export type Machine = {
  id: string;
  name: string;
  image: {src: string;alt: string;background: string;};
  description?: string;
  capacity?: string;
  specs: {label: string;value: string;}[];
  runs: string[];
  note?: string;
  cta: {label: string;href: string;};
  featured: boolean;
};

export const machines: Machine[] = [
{
  id: 'individual',
  name: 'Holon',
  image: {
    src: "/single-user.jpg",
    alt: 'The Holon machine, a compact matte-black desktop tower',
    background: '#FFFFFF'
  },
  description: 'For a single user experience.',
  specs: [
  { label: 'Processor', value: 'AMD Ryzen 5 9600X 6-Core' },
  { label: 'Memory', value: '32GB DDR5-6000' },
  { label: 'Graphics', value: 'AMD Radeon RX 9070 XT 16GB' },
  { label: 'Storage', value: '1TB NVMe M.2 SSD' }],

  runs: ['Qwen 3.6 35B', 'Qwen 3.8 27B', 'Gemma 4 26B'],
  cta: { label: 'Secure a spot', href: 'https://buy.stripe.com/aFaaEY5rTaY159Oeg33Je01' },
  featured: false
},
{
  id: 'team',
  name: 'Holon Super',
  image: {
    src: "/image.png",
    alt: 'The Holon Super machine, a full-height matte-black tower',
    background: '#EBEBEB'
  },
  capacity: '8–10 concurrent users, burst usage up to 16.',
  specs: [
  { label: 'Accelerators', value: '4 × Radeon AI PRO R9700 32GB GDDR6' },
  { label: 'Processor', value: 'Threadripper 7960X' },
  { label: 'Memory', value: '128GB DDR5' },
  { label: 'Storage', value: '8TB M.2' }],

  runs: ['DeepSeek V4 Flash', 'Qwen 3.8 Flash Next', 'GPT-OSS 120B'],
  note: '*Can be configured to fit usage',
  cta: { label: 'Book a build slot', href: 'https://calendly.com/sayyss-holon-research/30min' },
  featured: true
}];