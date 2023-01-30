const guitarCase = [
  'Original Hard Shell Case',
  'Original Molded Case',
  'Original Soft Shell Case',
  'Original Gigbag',
  'Gator Hard Shell Case',
  'TKL Hard Shell Case',
  'TKL Molded Hard Shell Case',
  'SKB Molded Hard Shell Case',
  'Gigbag',
] as const;

export const guitarCaseMap: { [key in typeof guitarCase[number]]: string } = {
  'Original Hard Shell Case': 'OHSC',
  'Original Molded Case': 'OHSC',
  'Original Soft Shell Case': 'OSSC',
  'Gator Hard Shell Case': 'Gator Case',
  'TKL Hard Shell Case': 'TKL Case',
  'TKL Molded Hard Shell Case': 'TKL Case',
  'SKB Molded Hard Shell Case': 'SKB Case',
  Gigbag: 'Gigbag',
  'Original Gigbag': 'Gigbag',
};

export default guitarCase;
