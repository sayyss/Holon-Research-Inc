export type BenchmarkRow = {
  context: string;
  holon: string;
  strix: string;
  spark: string;
};

export type BenchmarkGroup = {
  label: string;
  rows: BenchmarkRow[];
};

export const benchmarkColumns = [
{ name: 'Holon', engine: 'holon engine', primary: true },
{ name: 'Strix Halo', engine: 'llama.cpp', primary: false },
{ name: 'DGX Spark', engine: 'vllm', primary: false }];


export const benchmarkGroups: BenchmarkGroup[] = [
{
  label: 'Time to first token',
  rows: [
  { context: '8K', holon: '7.58 s', strix: '7.10 s', spark: '22.42 s' },
  { context: '32K', holon: '26.82 s', strix: '35.54 s', spark: '86.06 s' },
  { context: '128K', holon: '126.35 s', strix: '272.38 s', spark: '167.83 s' }]

}];

export type HolonSuperBenchmarkRow = {
  concurrentUsers: string;
  totalPrefillSpeed: string;
  generationSpeedPerUser: string;
  timeToFirstToken: string;
};

export const holonSuperBenchmarkRows: HolonSuperBenchmarkRow[] = [
  {
    concurrentUsers: '8 users',
    totalPrefillSpeed: '~5,500 tokens/sec',
    generationSpeedPerUser: '67.9 tokens/sec',
    timeToFirstToken: '0.19 seconds'
  },
  {
    concurrentUsers: '16 users',
    totalPrefillSpeed: '~6,000 tokens/sec',
    generationSpeedPerUser: '51.0 tokens/sec',
    timeToFirstToken: '0.25 seconds'
  }
];
