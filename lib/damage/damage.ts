import { IDamageAreas, StarRatingType } from 'lib/types';

export type { StarRatingType } from 'lib/types';

const stars: StarRatingType[] = [
  'N/A',
  '☆ · · · ·',
  '✯ · · · ·',
  '✯☆ · · ·',
  '✯✯ · · ·',
  '✯✯☆ · ·',
  '✯✯✯ · ·',
  '✯✯✯☆ ·',
  '✯✯✯✯ ·',
  '✯✯✯✯☆',
  '✯✯✯✯✯',
];

export const damageOptions = {
  overallCondition: stars,
  bodyBack: stars,
  bodyFront: stars,
  bodyBinding: stars,
  fretboard: stars,
  fretLife: stars,
  neckBack: stars,
  neckBinding: stars,
  neckPocket: stars,
  headstockBack: stars,
  headstockFront: stars,
  bridge: stars,
  tailpiece: stars,
  hardware: stars,
  knobs: stars,
  pickups: stars,
};

export const damageLabelPrettier: IDamageAreas = {
  overallCondition: 'Overall Condition',
  bodyBack: 'Body Back',
  bodyFront: 'Body Front',
  bodyBinding: 'Body Binding',
  fretboard: 'Fretboard',
  fretLife: 'Fret Life',
  neckBack: 'Neck',
  neckBinding: 'Neck Binding',
  neckPocket: 'Neck Pocket',
  headstockBack: 'Headstock Back',
  headstockFront: 'Headstock Front',
  bridge: 'Bridge',
  tailpiece: 'Tailpiece',
  hardware: 'Hardware',
  knobs: 'Knobs',
  pickups: 'Pickups',
};
