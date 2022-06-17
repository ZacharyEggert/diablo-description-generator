import {
  IAcousticDamageContext,
  IAmpDamageContext,
  IDamageContext,
} from './types';
import { createContext, useContext } from 'react';

export type {
  IDamageContext,
  IAmpDamageContext,
  IAcousticDamageContext,
} from './types';

export const defaultDamageContext: IDamageContext = {
  rating: {
    overallCondition: '☆ · · · ·',
    bodyBack: '☆ · · · ·',
    bodyFront: '☆ · · · ·',
    bodyBinding: '☆ · · · ·',
    fretboard: '☆ · · · ·',
    fretLife: '☆ · · · ·',
    neckBack: '☆ · · · ·',
    neckBinding: '☆ · · · ·',
    neckPocket: '☆ · · · ·',
    headstockFront: '☆ · · · ·',
    headstockBack: '☆ · · · ·',
    bridge: '☆ · · · ·',
    pickups: '☆ · · · ·',
    tailpiece: '☆ · · · ·',
    knobs: '☆ · · · ·',
    hardware: '☆ · · · ·',
  },
  description: {
    overallCondition: '',
    bodyBack: '',
    bodyFront: '',
    bodyBinding: '',
    fretboard: '',
    fretLife: '',
    neckBack: '',
    neckBinding: '',
    neckPocket: '',
    headstockFront: '',
    headstockBack: '',
    bridge: '',
    pickups: '',
    tailpiece: '',
    knobs: '',
    hardware: '',
  },
};

export const DamageContext =
  createContext<IDamageContext>(defaultDamageContext);
export const useDamageContext = () => useContext(DamageContext);

export const defaultAmpDamageContext: IAmpDamageContext = {
  rating: {
    overallCondition: '☆ · · · ·',
  },
  description: {
    overallCondition: '',
  },
};

export const AmpDamageContext = createContext<IAmpDamageContext>(
  defaultAmpDamageContext,
);
export const useAmpDamageContext = () => useContext(AmpDamageContext);

export const defaultAcousticDamageContext: IAcousticDamageContext = {
  rating: {
    overallCondition: '☆ · · · ·',
  },
  description: {
    overallCondition: '',
  },
};

export const AcousticDamageContext = createContext<IAcousticDamageContext>(
  defaultAcousticDamageContext,
);
export const useAcousticDamageContext = () => useContext(AcousticDamageContext);
