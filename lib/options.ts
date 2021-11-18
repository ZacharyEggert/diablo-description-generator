import { IFormContext } from './context';
import make from './options/make';
import model from './options/model';
import subModel from './options/subModel';
import country from './options/country';
import condition from './options/condition';
import bodyType from './options/bodyType';
import bodyWood from './options/bodyWood';
import scaleLength from './options/scaleLength';
import neckJoint from './options/neckJoint';
import neckWood from './options/neckWood';
import fingerBoardMaterial from './options/fingerBoardMaterial';
import radius from './options/radius';
import neckProfile from './options/neckProfile';
import inlays from './options/inlays';
import nutWidth from './options/nutWidth';
import nutMaterial from './options/nutMaterial';
import frets from './options/frets';
import pickupConfiguration from './options/pickupConfiguration';
import pickguard from './options/pickGuard';
import pots from './options/pots';
import switches from './options/switches';
import hardware from './options/hardware';
import knobs from './options/knobs';
import otherFeatures from './options/otherFeatures';
import stringGauge from './options/stringGauge';
import guitarCase from './options/guitarCase';
import bridge from './options/bridge';
import tuningMachineBrands from './options/tuningMachineBrands';
import tuningMachineModels from './options/tuningMachineModels';
import tuningMachineHeads from './options/tuningMachineHeads';
import modifications from './options/modifications';

export {
    make,
    model,
    subModel,
    country,
    condition,
    bodyType,
    bodyWood,
    scaleLength,
    neckJoint,
    neckWood,
    fingerBoardMaterial,
    radius,
    neckProfile,
    inlays,
    nutWidth,
    nutMaterial,
    frets,
    pickupConfiguration,
    pickguard,
    pots,
    switches,
    hardware,
    knobs,
    otherFeatures,
    stringGauge,
    bridge,
    guitarCase,
    tuningMachineBrands,
    tuningMachineModels,
    tuningMachineHeads,
    modifications,
};

export const formOptions = {
    make,
    model,
    subModel,
    year: [],
    finish: [],
    countryOfOrigin: country,
    serial: [],
    condition,
    weight: [],
    bodyType,
    bodyWood,
    scaleLength,
    neckJoint,
    neckWood,
    neckFinish: [],
    fingerBoard: fingerBoardMaterial,
    radius,
    neckProfile,
    inlays,
    nutWidth,
    nut: nutMaterial,
    frets,
    pickupConfiguration,
    pickupNeck: [],
    pickupMiddle: [],
    pickupBridge: [],
    pickguard,
    pots,
    coilTap: [],
    pickupSwitch: switches,
    killSwitch: switches,
    phaseSwitch: switches,
    hardware,
    tuningMachineBrands,
    tuningMachineModels,
    tuningMachineHeads,
    bridge,
    knobs,
    modifications,
    otherFeatures,
    stringGauge,
    guitarCase,
};

export const formLabelPrettier: IFormContext = {
    make: 'Make',
    model: 'Model',
    subModel: 'Sub-Model',
    year: 'Year',
    finish: 'Finish',
    countryOfOrigin: 'Country',
    serial: 'Serial #',
    condition: 'Condition',
    weight: 'Weight',
    bodyType: 'Body Type',
    bodyWood: 'Body Wood',
    scaleLength: 'Scale Length',
    neckJoint: 'Neck Joint',
    neckWood: 'Neck Wood',
    neckFinish: 'Neck Finish',
    fingerBoard: 'Finger Board',
    radius: 'Neck Radius',
    neckProfile: 'Neck Profile',
    inlays: 'Inlays',
    nutWidth: 'Nut Width',
    nut: 'Nut',
    frets: 'Frets',
    pickupConfiguration: 'Pickup Config',
    pickupNeck: 'Neck Pickup',
    pickupMiddle: 'Middle Pickup',
    pickupBridge: 'Bridge Pickup',
    pickguard: 'Pickguard',
    pots: 'Pots',
    coilTap: 'Coil Tap',
    pickupSwitch: 'Switch',
    killSwitch: 'Kill Switch',
    phaseSwitch: 'Phase Switch',
    hardware: 'Hardware',
    tuningMachineBrands: 'Tuner Brand',
    tuningMachineModels: 'Tuner Model',
    tuningMachineHeads: 'Tuner Head',
    bridge: 'Bridge',
    knobs: 'Knobs',
    modifications: 'Mods',
    otherFeatures: 'Other Features',
    stringGauge: 'String Gauge',
    guitarCase: 'Case',
};
