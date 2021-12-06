import { createContext, useContext } from 'react';
import { IDamageContext } from './types';

export type { IDamageContext } from './types';

export const defaultDamageContext: IDamageContext = {
    overallCondition: '☆',
    bodyBack: '☆',
    bodyFront: '☆',
    bodyBinding: '☆',
    fretboard: '☆',
    fretLife: '☆',
    neckBack: '☆',
    neckBinding: '☆',
    neckPocket: '☆',
    headstockFront: '☆',
    headstockBack: '☆',
    bridge: '☆',
    pickups: '☆',
    tailpiece: '☆',
    knobs: '☆',
    hardware: '☆',
};

export const DamageContext =
    createContext<IDamageContext>(defaultDamageContext);
export const useDamageContext = () => useContext(DamageContext);
