import { IDamageAreas, IDamageContext } from 'lib/types';

import overallCondition from './options/overallCondition';
import bodyBack from 'lib/damage/options/bodyBack';
import bodyFront from 'lib/damage/options/bodyFront';
import bodyBinding from 'lib/damage/options/bodyBinding';
import fretboard from 'lib/damage/options/fretboard';
import fretLife from 'lib/damage/options/fretLife';
import neckBack from 'lib/damage/options/neckBack';
import neckBinding from 'lib/damage/options/neckBinding';
import neckPocket from 'lib/damage/options/neckPocket';
import headstockBack from 'lib/damage/options/headstockBack';
import headstockFront from 'lib/damage/options/headstockFront';
import bridge from 'lib/damage/options/bridge';
import tailpiece from 'lib/damage/options/tailpiece';
import hardware from 'lib/damage/options/hardware';
import knobs from 'lib/damage/options/knobs';
import pickups from 'lib/damage/options/pickups';

export {
    overallCondition,
    bodyBack,
    bodyFront,
    bodyBinding,
    fretboard,
    fretLife,
    neckBack,
    neckBinding,
    neckPocket,
    headstockBack,
    headstockFront,
    bridge,
    tailpiece,
    hardware,
    knobs,
    pickups,
};

const stars = [
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
