import { make, tuningMachineBrands } from 'lib/description/description';

export {
  combineAcousticStates,
  combineAmpStates,
  combinePickups,
  combineStates,
} from 'lib/helpers/combineStates';

const whitelist = [
  ...make,
  ...tuningMachineBrands,
  'c',
  'd',
  'v',
  'u',
  'bb',
  'deluxe',
  'kluson',
  'abr-1',
  'tune-o-matic',
  'seymour',
  'duncan',
  'stratocaster',
  'strat',
  'tele',
  'telecaster',
  '498t',
  '498r',
  '490t',
  '490r',
  'graph',
  'tech',
  'Grover',
  'Gotoh',
  'Hip',
  'Shot',
  'Sperzel',
  'Schaller',
  'Floyd',
  'Rose',
  'Nashville',
].map((x) => x.toLowerCase());

export const fixCase = (paragraph: string): string => {
  const words = paragraph.split(' ');
  const fixed = words.map((word) => {
    if (whitelist.includes(word.toLowerCase())) {
      return word;
    }
    return word.toLowerCase();
  });

  return fixed.join(' ');
};

// return all combinations of two arrays as one array a single level deep
export const combinateArrays = (a: string[], b: string[]) => {
  const ret = a.map((x) => b.map((y) => `${x} ${y}`));
  return ret.reduce((acc, cur) => acc.concat(cur), []);
};

export {
  acousticDamageReportVerbose,
  ampDamageReportVerbose,
  damageReport,
  damageReportVerbose,
  listify,
  listifyAcoustic,
  listifyAmp,
} from 'lib/helpers/listify';
