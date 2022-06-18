export type { IFormContext, IDamageAreas, IDamageContext } from './guitar';

export type {
  IAmpFormContext,
  IAmpDamageAreas,
  IAmpDamageContext,
} from './amplifier';

export type {
  IAcousticFormContext,
  IAcousticDamageAreas,
  IAcousticDamageContext,
} from './acoustic';

export type StarRatingType =
  | 'N/A'
  | '☆ · · · ·'
  | '✯ · · · ·'
  | '✯☆ · · ·'
  | '✯✯ · · ·'
  | '✯✯☆ · ·'
  | '✯✯✯ · ·'
  | '✯✯✯☆ ·'
  | '✯✯✯✯ ·'
  | '✯✯✯✯☆'
  | '✯✯✯✯✯';
