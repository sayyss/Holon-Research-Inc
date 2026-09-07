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

},
{
  label: 'Prefill throughput',
  rows: [
  { context: '8K', holon: '1,103 t/s', strix: '1,096 t/s', spark: '372 t/s' },
  { context: '32K', holon: '1,228 t/s', strix: '910 t/s', spark: '383 t/s' },
  { context: '128K', holon: '1,014 t/s', strix: '468 t/s', spark: '764 t/s' }]

}];