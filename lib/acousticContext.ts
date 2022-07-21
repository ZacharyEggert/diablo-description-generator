import { createContext, useContext } from 'react';

import { IAcousticFormContext } from 'lib/types';

export type { IAcousticFormContext } from 'lib/types';

export const defaultAcousticContext: IAcousticFormContext = {
  acousticMake: 'sel',
  acousticModel: 'sel',
  acousticSubModel: 'sel',
  acousticYear: '',
  acousticFinish: '',
  acousticCountryOfOrigin: 'sel',
  acousticSerial: '',
  acousticCondition: 'sel',
  acousticWeight: '',
  acousticBackWood: 'sel',
  acousticSideWood: 'sel',
  acousticTopWood: 'sel',
  acousticScaleLength: 'sel',
  acousticNeckJoint: 'set',
  acousticNeckWood: 'sel',
  acousticNeckFinish: 'sel',
  acousticFingerBoard: 'sel',
  acousticRadius: 'sel',
  acousticNeckProfile: 'sel',
  acousticInlays: 'sel',
  acousticNutWidth: 'sel',
  acousticNut: 'sel',
  acousticFrets: 'sel',
  acousticPickguard: 'sel',
  acousticTuningMachineBrands: 'sel',
  acousticTuningMachineModels: 'sel',
  acousticTuningMachineHeads: 'sel',
  acousticBridge: '',
  acousticModifications: '',
  acousticOtherFeatures: '',
  acousticStringGauge: 'sel',
  acousticGuitarCase: 'sel',
  acousticBodyShape: 'sel',
  acousticFinishType: 'sel',
  acousticNeckThickness_1: '',
  acousticNeckThickness_12: '',
  acousticStrapButtons: '',
  acousticElectronics: 'sel',
  acousticElectronicsType: 'sel',
};

export const emptyAcousticContext: IAcousticFormContext = {
  acousticMake: '',
  acousticModel: '',
  acousticSubModel: '',
  acousticYear: '',
  acousticFinish: '',
  acousticCountryOfOrigin: '',
  acousticSerial: '',
  acousticCondition: '',
  acousticWeight: '',
  acousticBackWood: '',
  acousticSideWood: '',
  acousticTopWood: '',
  acousticScaleLength: '',
  acousticNeckJoint: '',
  acousticNeckWood: '',
  acousticNeckFinish: '',
  acousticFingerBoard: '',
  acousticRadius: '',
  acousticNeckProfile: '',
  acousticInlays: '',
  acousticNutWidth: '',
  acousticNut: '',
  acousticFrets: '',
  acousticPickguard: '',
  acousticTuningMachineBrands: '',
  acousticTuningMachineModels: '',
  acousticTuningMachineHeads: '',
  acousticBridge: '',
  acousticModifications: '',
  acousticOtherFeatures: '',
  acousticStringGauge: '',
  acousticGuitarCase: '',
  acousticBodyShape: '',
  acousticFinishType: '',
  acousticNeckThickness_1: '',
  acousticNeckThickness_12: '',
  acousticStrapButtons: '',
  acousticElectronics: '',
  acousticElectronicsType: '',
};

export const AcousticFormContext = createContext<IAcousticFormContext>(
  defaultAcousticContext,
);
export const UseAcousticFormContext = () => useContext(AcousticFormContext);

export const AcousticOtherContext =
  createContext<IAcousticFormContext>(emptyAcousticContext);
export const UseAcousticOtherContext = () => useContext(AcousticOtherContext);
