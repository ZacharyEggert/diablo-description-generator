import {
  IAcousticDamageContext,
  IAcousticFormContext,
  IAmpDamageContext,
  IAmpFormContext,
  IDamageContext,
  IFormContext,
} from './types';

export const manualArrayOfContextKeys: Array<
  keyof (IFormContext & { name?: string })
> = [
  'make',
  'model',
  'subModel',
  'year',
  'finish',
  'finishType',
  'countryOfOrigin',
  'serial',
  'condition',
  'weight',
  'bodyShape',
  'bodyType',
  'bodyWood',
  'topWood',
  'scaleLength',
  'neckJoint',
  'neckWood',
  'neckFinish',
  'fingerBoard',
  'radius',
  'neckProfile',
  'neckThickness_1',
  'neckThickness_12',
  'inlays',
  'nutWidth',
  'nut',
  'frets',
  'pickupConfiguration',
  'pickupNeck',
  'pickupMiddle',
  'pickupBridge',
  'pickguard',
  'pots',
  'potCodes',
  'coilTap',
  'pickupSwitch',
  'phaseSwitch',
  'killSwitch',
  'hardware',
  'tuningMachineBrands',
  'tuningMachineModels',
  'tuningMachineHeads',
  'strapButtons',
  'bridge',
  'knobs',
  'modifications',
  'otherFeatures',
  'stringGauge',
  'guitarCase',
];

export const manualArrayOfAmpKeys: Array<keyof IAmpFormContext> = [
  'ampMake',
  'ampModel',
  'ampSubModel',
  'ampYear',
  'ampCountryOfOrigin',
  'ampCondition',
  'ampSerial',
  'ampPower',
  'ampWood',
  'ampType',
  'ampExterior',
  'ampExteriorColor',
  'ampGrillCloth',
  'ampPanel',
  'ampWeight',
  'ampPowerTubes',
  'ampPreampTubes',
  'ampPreampTubeV1',
  'ampPreampTubeV2',
  'ampPreampTubeV3',
  'ampPreampTubeV4',
  'ampPreampTubeV5',
  'ampPreampTubeV6',
  'ampPreampTubeV7',
  'ampPreampTubeV8',
  'ampRectifierTube',
  'ampPhaseInverterTube',
  'ampMasterVolume',
  'ampChannels',
  'ampInputs',
  'ampEffectsLoop',
  'ampSpeakerModel',
  'ampSpeakerDateCodes',
  'ampInputVoltage',
  'ampTransformerOriginality',
  'ampTransformerDateCodeInput',
  'ampTransformerDateCodeOutput',
  'ampTransformerDateCodeChoke',
  'ampTransformerDateCodeReverb',
  'ampCapacitorOriginality',
  'ampGrounding',
  'ampBiasRating',
  'ampOutputImpedance',
  'ampOutputs',
];

export const manualArrayOfAcousticKeys: Array<keyof IAcousticFormContext> = [];

export const manualArrayOfDamageKeys: Array<keyof IDamageContext['rating']> = [
  'overallCondition',
  'bodyBack',
  'bodyFront',
  'bodyBinding',
  'fretboard',
  'fretLife',
  'neckBack',
  'neckBinding',
  'neckPocket',
  'headstockFront',
  'headstockBack',
  'pickups',
  'bridge',
  'tailpiece',
  'knobs',
  'hardware',
];

export const manualArrayOfAmpDamageKeys: Array<
  keyof IAmpDamageContext['rating']
> = ['overallCondition'];

export const manualArrayOfAcousticDamageKeys: Array<
  keyof IAcousticDamageContext['rating']
> = [
  'overallCondition',
  'bodyBack',
  'bodyFront',
  'bodyBinding',
  'fretboard',
  'fretLife',
  'neckBack',
  'neckBinding',
  'neckPocket',
  'headstockFront',
  'headstockBack',
  'bridge',
  'tailpiece',
  'hardware',
];
