import { IFormContext } from 'lib/context';
import make from 'lib/options/make';
import model from 'lib/options/model';
import subModel from 'lib/options/subModel';
import country from 'lib/options/country';
import condition from 'lib/options/condition';
import bodyType from 'lib/options/bodyType';
import bodyWood from 'lib/options/bodyWood';
import scaleLength from 'lib/options/scaleLength';
import neckJoint from 'lib/options/neckJoint';
import neckWood from 'lib/options/neckWood';
import fingerBoardMaterial from 'lib/options/fingerBoardMaterial';
import radius from 'lib/options/radius';
import neckProfile from 'lib/options/neckProfile';
import inlays from 'lib/options/inlays';
import nutWidth from 'lib/options/nutWidth';
import nutMaterial from 'lib/options/nutMaterial';
import frets from 'lib/options/frets';
import pickupConfiguration from 'lib/options/pickupConfiguration';
import pickguard from 'lib/options/pickGuard';
import pots from 'lib/options/pots';
import switches from 'lib/options/switches';
import hardware from 'lib/options/hardware';
import knobs from 'lib/options/knobs';
import otherFeatures from 'lib/options/otherFeatures';
import stringGauge from 'lib/options/stringGauge';
import guitarCase from 'lib/options/guitarCase';
import bridge from 'lib/options/bridge';
import tuningMachineBrands from 'lib/options/tuningMachineBrands';
import tuningMachineModels from 'lib/options/tuningMachineModels';
import tuningMachineHeads from 'lib/options/tuningMachineHeads';
import modifications from 'lib/options/modifications';
import pickupBrands from 'lib/options/pickupBrands';
import coilTap from 'lib/options/coilTap';
import topWood from 'lib/options/topWoods';

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
