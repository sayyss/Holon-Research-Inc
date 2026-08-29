export type Machine = {
  id: string;
  name: string;
  description: string;
  specs: {label: string;value: string;}[];
  cta: {label: string;href: string;};
  featured: boolean;
};

export const machines: Machine[] = [
{
  id: 'individual',
  name: 'Holon',
  description: 'For a single user experience. Run your own models, agents entirely on your own hardware.',
  specs: [
  { label: 'Processor', value: 'Ryzen AI Max+ 395' },
  { label: 'Memory', value: '64GB unified' },
  { label: 'Storage', value: '1TB M.2' }],

  cta: { label: 'Secure a spot', href: 'https://buy.stripe.com/aFaaEY5rTaY159Oeg33Je01' },
  featured: true
},
{
  id: 'team',
  name: 'Holon Super',
  description:
  'A shared build for small teams, with our custom stack to support concurrent agentic sessions. Buy as many.',
  specs: [
  { label: 'Accelerators', value: '4 × Radeon AI PRO R9700 32GB GDDR6' },
  { label: 'Processor', value: 'Threadripper PRO 9965WX' },
  { label: 'Memory', value: '128GB DDR5' },
  { label: 'Storage', value: '8TB M.2' }],

  cta: { label: 'Book a build slot', href: 'https://calendly.com/sayyss-holon-research/30min' },
  featured: false
}];