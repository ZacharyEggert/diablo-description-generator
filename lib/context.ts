import { createContext, useContext } from 'react';
import { IFormContext } from './types';

export type { IFormContext } from './types';

export const defaultContext: IFormContext = {
    make: 'sel',
    model: 'sel',
    subModel: 'sel',
    year: '',
    finish: '',
    countryOfOrigin: 'sel',
    serial: '',
    condition: 'sel',
    weight: '',
    bodyType: 'sel',
    bodyWood: 'sel',
    topWood: 'sel',
    scaleLength: 'sel',
    neckJoint: 'sel',
    neckWood: 'sel',
    neckFinish: '',
    fingerBoard: 'sel',
    radius: 'sel',
    neckProfile: 'sel',
    inlays: 'sel',
    nutWidth: 'sel',
    nut: 'sel',
    frets: 'sel',
    pickupConfiguration: 'sel',
    pickupNeck: '',
    pickupMiddle: '',
    pickupBridge: '',
    pickguard: 'sel',
    pots: 'sel',
    coilTap: 'sel',
    pickupSwitch: 'sel',
    phaseSwitch: 'sel',
    killSwitch: 'sel',
    hardware: 'sel',
    tuningMachineBrands: 'sel',
    tuningMachineModels: 'sel',
    tuningMachineHeads: 'sel',
    bridge: 'sel',
    knobs: 'sel',
    modifications: 'sel',
    otherFeatures: 'sel',
    stringGauge: 'sel',
    guitarCase: 'sel',
};

export const emptyContext: IFormContext = {
    make: '',
    model: '',
    subModel: '',
    year: '',
    finish: '',
    countryOfOrigin: '',
    serial: '',
    condition: '',
    weight: '',
    bodyType: '',
    bodyWood: '',
    topWood: '',
    scaleLength: '',
    neckJoint: '',
    neckWood: '',
    neckFinish: '',
    fingerBoard: '',
    radius: '',
    neckProfile: '',
    inlays: '',
    nutWidth: '',
    nut: '',
    frets: '',
    pickupConfiguration: '',
    pickupNeck: '',
    pickupMiddle: '',
    pickupBridge: '',
    pickguard: '',
    pots: '',
    coilTap: '',
    killSwitch: '',
    phaseSwitch: '',
    pickupSwitch: '',
    hardware: '',
    tuningMachineBrands: '',
    tuningMachineModels: '',
    tuningMachineHeads: '',
    bridge: '',
    knobs: '',
    modifications: '',
    otherFeatures: '',
    stringGauge: '',
    guitarCase: '',
};

export const FormContext = createContext<IFormContext>(defaultContext);
export const UseFormContext = () => useContext(FormContext);

export const OtherContext = createContext<IFormContext>(emptyContext);
export const UseOtherContext = () => useContext(OtherContext);
