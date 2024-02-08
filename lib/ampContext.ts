import { createContext, useContext } from 'react';

import { IAmpFormContext } from 'lib/types';

export type { IAmpFormContext } from 'lib/types';

export const defaultAmpContext: IAmpFormContext = {
  ampBiasRating: '',
  ampCapacitorOriginality: '',
  ampMake: 'sel',
  ampModel: '',
  ampPower: '',
  ampCountryOfOrigin: 'sel',
  ampPowerTubes: '',
  ampPreampTubes: '',
  ampSerial: '',
  ampSpeakerDateCodes: '',
  ampSpeakerModel: '',
  ampSubModel: '',
  ampType: '',
  ampTransformerDateCodeInput: '',
  ampTransformerDateCodeOutput: '',
  ampTransformerDateCodeChoke: '',
  ampTransformerDateCodeReverb: '',
  ampTransformerOriginality: '',
  ampWood: '',
  ampPanel: '',
  ampGrounding: '',
  ampGrillCloth: 'sel',
  ampExterior: 'sel',
  ampExteriorColor: 'sel',
  ampYear: '',
  ampChannels: '',
  ampCondition: 'sel',
  ampEffectsLoop: '',
  ampInputs: '',
  ampInputVoltage: 'sel',
  ampMasterVolume: '',
  ampOutputImpedance: 'sel',
  ampOutputs: '',
  ampPhaseInverterTube: '',
};

export const emptyAmpContext: IAmpFormContext = {
  ampBiasRating: '',
  ampCapacitorOriginality: '',
  ampMake: '',
  ampModel: '',
  ampPower: '',
  ampPowerTubes: '',
  ampPreampTubes: '',
  ampCountryOfOrigin: '',
  ampSerial: '',
  ampSpeakerDateCodes: '',
  ampSpeakerModel: '',
  ampSubModel: '',
  ampType: '',
  ampTransformerDateCodeInput: '',
  ampTransformerDateCodeOutput: '',
  ampTransformerDateCodeChoke: '',
  ampTransformerDateCodeReverb: '',
  ampTransformerOriginality: '',
  ampWood: '',
  ampPanel: '',
  ampGrillCloth: '',
  ampExterior: '',
  ampExteriorColor: '',
  ampYear: '',
  ampChannels: '',
  ampCondition: '',
  ampEffectsLoop: '',
  ampInputs: '',
  ampInputVoltage: '',
  ampMasterVolume: '',
  ampOutputImpedance: '',
  ampOutputs: '',
  ampPhaseInverterTube: '',
  ampGrounding: '',
};

export const AmpFormContext = createContext<IAmpFormContext>(defaultAmpContext);
export const UseAmpFormContext = () => useContext(AmpFormContext);

export const AmpOtherContext = createContext<IAmpFormContext>(emptyAmpContext);
export const UseAmpOtherContext = () => useContext(AmpOtherContext);
