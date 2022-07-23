import { IAcousticFormContext } from 'lib/acousticContext';
import { IAmpFormContext } from 'lib/ampContext';
import { IFormContext } from 'lib/context';
import acousticMake from 'lib/description/acousticOptions/acousticMake';
import acousticModel from 'lib/description/acousticOptions/acousticModel';
import acousticSubModel from 'lib/description/acousticOptions/acousticSubModel';
import ampMake from './ampOptions/make';
import bodyShape from 'lib/description/guitarOptions/bodyShape';
import bodyType from 'lib/description/guitarOptions/bodyType';
import bodyWood from 'lib/description/guitarOptions/bodyWood';
import bridge from 'lib/description/guitarOptions/bridge';
import coilTap from 'lib/description/guitarOptions/coilTap';
import condition from 'lib/description/guitarOptions/condition';
import country from 'lib/description/guitarOptions/country';
import fingerBoardMaterial from 'lib/description/guitarOptions/fingerBoardMaterial';
import finishType from 'lib/description/guitarOptions/finishType';
import frets from 'lib/description/guitarOptions/frets';
import guitarCase from 'lib/description/guitarOptions/guitarCase';
import hardware from 'lib/description/guitarOptions/hardware';
import inlays from 'lib/description/guitarOptions/inlays';
import knobs from 'lib/description/guitarOptions/knobs';
import make from 'lib/description/guitarOptions/make';
import model from 'lib/description/guitarOptions/model';
import modifications from 'lib/description/guitarOptions/modifications';
import neckFinish from 'lib/description/guitarOptions/neckFinish';
import neckJoint from 'lib/description/guitarOptions/neckJoint';
import neckProfile from 'lib/description/guitarOptions/neckProfile';
import neckWood from 'lib/description/guitarOptions/neckWood';
import nutMaterial from 'lib/description/guitarOptions/nutMaterial';
import nutWidth from 'lib/description/guitarOptions/nutWidth';
import otherFeatures from 'lib/description/guitarOptions/otherFeatures';
import pickguard from 'lib/description/guitarOptions/pickGuard';
import pickupBrands from 'lib/description/guitarOptions/pickupBrands';
import pickupConfiguration from 'lib/description/guitarOptions/pickupConfiguration';
import pots from 'lib/description/guitarOptions/pots';
import radius from 'lib/description/guitarOptions/radius';
import scaleLength from 'lib/description/guitarOptions/scaleLength';
import stringGauge from 'lib/description/guitarOptions/stringGauge';
import subModel from 'lib/description/guitarOptions/subModel';
import switches from 'lib/description/guitarOptions/switches';
import topWood from 'lib/description/guitarOptions/topWoods';
import tuningMachineBrands from 'lib/description/guitarOptions/tuningMachineBrands';
import tuningMachineHeads from 'lib/description/guitarOptions/tuningMachineHeads';
import tuningMachineModels from 'lib/description/guitarOptions/tuningMachineModels';

export {
  make,
  model,
  subModel,
  country,
  condition,
  bodyType,
  bodyWood,
  scaleLength,
  neckFinish,
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

export const formOptions: {
  [key in keyof IFormContext]: IFormContext[key][] | object;
} = {
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
  neckFinish,
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
  potCodes: [],
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
  bodyShape,
  finishType,
  neckThickness_1: [],
  neckThickness_12: [],
  strapButtons: [],
};

export const formLabelPrettier = {
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
  potCodes: 'Pot Date Codes',
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
  bodyShape: 'Body Shape',
  finishType: 'Finish Type',
  neckThickness_1: 'Neck Thickness at 1st',
  neckThickness_12: 'Neck Thickness at 12th',
  strapButtons: 'Strap Buttons',
};

export const acousticFormOptions: {
  [key in keyof IAcousticFormContext]: any;
} = {
  acousticMake,
  acousticModel,
  acousticSubModel,
  acousticYear: [],
  acousticFinish: [],
  acousticCountryOfOrigin: country,
  acousticSerial: [],
  acousticCondition: condition,
  acousticWeight: [],
  acousticBackWood: bodyWood,
  acousticSideWood: bodyWood,
  acousticTopWood: topWood,
  acousticScaleLength: scaleLength,
  acousticNeckJoint: neckJoint,
  acousticNeckWood: neckWood,
  acousticNeckFinish: neckFinish,
  acousticFingerBoard: fingerBoardMaterial,
  acousticRadius: radius,
  acousticNeckProfile: neckProfile,
  acousticInlays: inlays,
  acousticNutWidth: nutWidth,
  acousticNut: nutMaterial,
  acousticFrets: frets,
  acousticPickguard: pickguard,
  acousticTuningMachineBrands: tuningMachineBrands,
  acousticTuningMachineModels: tuningMachineModels,
  acousticTuningMachineHeads: tuningMachineHeads,
  acousticBridge: bridge,
  acousticModifications: modifications,
  acousticOtherFeatures: otherFeatures,
  acousticStringGauge: stringGauge,
  acousticGuitarCase: guitarCase,
  acousticBodyShape: bodyShape,
  acousticFinishType: finishType,
  acousticNeckThickness_1: [],
  acousticNeckThickness_12: [],
  acousticStrapButtons: [],
  acousticElectronics: ['Fishman', 'EMG', 'Seymour Duncan', 'Mojotone'],
  acousticElectronicsType: ['Under Bridge Piezo', 'Soundhole Magnetic Pickup'],
};

export const acousticFormLabelPrettier = {
  acousticMake: 'Make',
  acousticModel: 'Model',
  acousticSubModel: 'Sub-Model',
  acousticYear: 'Year',
  acousticFinish: 'Finish',
  acousticCountryOfOrigin: 'Country',
  acousticSerial: 'Serial #',
  acousticCondition: 'Condition',
  acousticWeight: 'Weight',
  acousticBackWood: 'Back Wood',
  acousticSideWood: 'Side Wood',
  acousticTopWood: 'Top Wood',
  acousticScaleLength: 'Scale Length',
  acousticNeckJoint: 'Neck Joint',
  acousticNeckWood: 'Neck Wood',
  acousticNeckFinish: 'Neck Finish',
  acousticFingerBoard: 'Finger Board',
  acousticRadius: 'Neck Radius',
  acousticNeckProfile: 'Neck Profile',
  acousticInlays: 'Inlays',
  acousticNutWidth: 'Nut Width',
  acousticNut: 'Nut',
  acousticFrets: 'Frets',
  acousticPickguard: 'Pickguard',
  acousticTuningMachineBrands: 'Tuner Brand',
  acousticTuningMachineModels: 'Tuner Model',
  acousticTuningMachineHeads: 'Tuner Head',
  acousticBridge: 'Bridge',
  acousticModifications: 'Mods',
  acousticOtherFeatures: 'Other Features',
  acousticStringGauge: 'String Gauge',
  acousticGuitarCase: 'Case',
  acousticBodyShape: 'Body Shape',
  acousticFinishType: 'Finish Type',
  acousticNeckThickness_1: 'Neck Thickness at 1st',
  acousticNeckThickness_12: 'Neck Thickness at 12th',
  acousticStrapButtons: 'Strap Buttons',
  acousticElectronics: 'Electronics',
  acousticElectronicsType: 'Electronics Type',
};

export { ampMake };

export const ampFormOptions: {
  [key in keyof IAmpFormContext]: IAmpFormContext[key][];
} = {
  ampMake: ampMake,
  ampModel: [],
  ampSubModel: [],
  ampYear: [],
  ampType: [],
  ampPower: [],
  ampExteriorColor: [],
  ampExterior: [],
  ampGrillCloth: [],
  ampPanel: [],
  ampWood: [],
  ampSerial: [],
  ampPreampTubes: [],
  ampPowerTubes: [],
  ampSpeakerModel: [],
  ampSpeakerDateCodes: [],
  ampTransformerDateCodes: [],
  ampTransformerOriginality: ['Original', 'Replaced'],
  ampCapacitorOriginality: ['Original', 'Recapped', 'Partially Recapped'],
  ampBiasRating: [],
};

export const ampFormLabelPrettier = {
  ampMake: 'Make',
  ampModel: 'Model',
  ampSubModel: 'Submodel',
  ampYear: 'Year',
  ampType: 'Type',
  ampPower: 'Power',
  ampExteriorColor: 'Exterior Color',
  ampExterior: 'Exterior Material',
  ampGrillCloth: 'Grill Cloth',
  ampPanel: 'Panel',
  ampWood: 'Cabinet Wood',
  ampSerial: 'Serial',
  ampPreampTubes: 'Preamp Tubes',
  ampPowerTubes: 'Power Tubes',
  ampSpeakerModel: 'Speakers',
  ampSpeakerDateCodes: 'Speaker Date Codes',
  ampTransformerDateCodes: 'Transformer Date Codes',
  ampTransformerOriginality: 'Transformer Originality',
  ampCapacitorOriginality: 'Capacitors',
  ampBiasRating: 'Bias',
};
