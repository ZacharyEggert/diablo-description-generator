const topWoods = [
  'Maple Top',
  'Maple Cap',
  'Flamed Maple Top',
  'Flamed Maple Cap',
  'Quilted Maple Top',
  'Quilted Maple Cap',
  'Burled Maple Top',
  'Burled Maple Cap',
  'Burled Poplar Top',
  'Burled Poplar Cap',
  'AA Flamed Maple Top',
  'AA Flamed Maple Cap',
  'AAA Flamed Maple Top',
  'AAA Flamed Maple Cap',
  '5A Flamed Maple Top',
  '5A Flamed Maple Cap',
  'Mahogany Top',
  'Mahogany Cap',
  'Ash Top',
  'Ash Cap',
] as const;

export const topWoodsMap: { [key in typeof topWoods[number]]: string } = {
  'Maple Top': '',
  'Maple Cap': '',
  'Flamed Maple Top': 'FMT',
  'Flamed Maple Cap': 'FMT',
  'Quilted Maple Top': 'QMT',
  'Quilted Maple Cap': 'QMT',
  'Burled Maple Top': 'BMT',
  'Burled Maple Cap': 'BMT',
  'Burled Poplar Top': 'BT',
  'Burled Poplar Cap': 'BT',
  'AA Flamed Maple Top': 'AA FMT',
  'AA Flamed Maple Cap': 'AA FMT',
  'AAA Flamed Maple Top': 'AAA FMT',
  'AAA Flamed Maple Cap': 'AAA FMT',
  '5A Flamed Maple Top': '5A FMT',
  '5A Flamed Maple Cap': '5A FMT',
  'Mahogany Top': '',
  'Mahogany Cap': '',
  'Ash Top': '',
  'Ash Cap': '',
};

export default topWoods;
