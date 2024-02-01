import { createContext, useContext } from 'react';

import { IAmpFormContext } from 'lib/types';

export type { IAmpFormContext } from 'lib/types';

export const defaultAmpContext: IAmpFormContext = {
  ampBiasRating: '',
  ampCapacitorOriginality: '',
  ampMake: 'sel',
  ampModel: '',
  ampPower: '',
  ampPowerTubes: '',
  ampPreampTubes: '',
  ampSerial: '',
  ampSpeakerDateCodes: '',
  ampSpeakerModel: '',
  ampSubModel: '',
  ampType: '',
  ampTransformerDateCodes: '',
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
};

export const emptyAmpContext: IAmpFormContext = {
  ampBiasRating: '',
  ampCapacitorOriginality: '',
  ampMake: '',
  ampModel: '',
  ampPower: '',
  ampPowerTubes: '',
  ampPreampTubes: '',
  ampSerial: '',
  ampSpeakerDateCodes: '',
  ampSpeakerModel: '',
  ampSubModel: '',
  ampType: '',
  ampTransformerDateCodes: '',
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
};

export const AmpFormContext = createContext<IAmpFormContext>(defaultAmpContext);
export const UseAmpFormContext = () => useContext(AmpFormContext);

export const AmpOtherContext = createContext<IAmpFormContext>(emptyAmpContext);
export const UseAmpOtherContext = () => useContext(AmpOtherContext);
