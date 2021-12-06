import { IFormContext } from 'lib/context';
import make from 'lib/description/options/make';
import model from 'lib/description/options/model';
import subModel from 'lib/description/options/subModel';
import country from 'lib/description/options/country';
import condition from 'lib/description/options/condition';
import bodyType from 'lib/description/options/bodyType';
import bodyWood from 'lib/description/options/bodyWood';
import scaleLength from 'lib/description/options/scaleLength';
import neckJoint from 'lib/description/options/neckJoint';
import neckWood from 'lib/description/options/neckWood';
import fingerBoardMaterial from 'lib/description/options/fingerBoardMaterial';
import radius from 'lib/description/options/radius';
import neckProfile from 'lib/description/options/neckProfile';
import inlays from 'lib/description/options/inlays';
import nutWidth from 'lib/description/options/nutWidth';
import nutMaterial from 'lib/description/options/nutMaterial';
import frets from 'lib/description/options/frets';
import pickupConfiguration from 'lib/description/options/pickupConfiguration';
import pickguard from 'lib/description/options/pickGuard';
import pots from 'lib/description/options/pots';
import switches from 'lib/description/options/switches';
import hardware from 'lib/description/options/hardware';
import knobs from 'lib/description/options/knobs';
import otherFeatures from 'lib/description/options/otherFeatures';
import stringGauge from 'lib/description/options/stringGauge';
import guitarCase from 'lib/description/options/guitarCase';
import bridge from 'lib/description/options/bridge';
import tuningMachineBrands from 'lib/description/options/tuningMachineBrands';
import tuningMachineModels from 'lib/description/options/tuningMachineModels';
import tuningMachineHeads from 'lib/description/options/tuningMachineHeads';
import modifications from 'lib/description/options/modifications';
import pickupBrands from 'lib/description/options/pickupBrands';
import coilTap from 'lib/description/options/coilTap';
import topWood from 'lib/description/options/topWoods';

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
    pickupBrands,
    topWood,
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
    topWood,
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
    pickupNeck: pickupBrands,
    pickupMiddle: pickupBrands,
    pickupBridge: pickupBrands,
    pickguard,
    pots,
    coilTap,
    pickupSwitch: switches,
    killSwitch: coilTap,
    phaseSwitch: coilTap,
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
    topWood: 'Top Wood',
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
