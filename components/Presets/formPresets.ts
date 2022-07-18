import { IAcousticFormContext, IAmpFormContext } from 'lib/types';
import { IFormContext, defaultContext, emptyContext } from 'lib/context';
import {
  defaultAcousticContext,
  emptyAcousticContext,
} from 'lib/acousticContext';
import { defaultAmpContext, emptyAmpContext } from 'lib/ampContext';

export type FormPreset<T = IFormContext> = {
  [key: string]: { formState: T; otherState: T } & {
    name: string;
  };
};

export type FormPresetReset<T = IFormContext> = {
  formState: Partial<T>;
  otherState: Partial<T>;
};

const formPresets: FormPreset<IFormContext> = {
  Clear: {
    formState: defaultContext,
    otherState: emptyContext,
    name: 'Clear',
  },
};
export default formPresets;

export const formPresetReset: FormPresetReset<IFormContext> = {
  formState: {
    year: '',
    serial: '',
    weight: '',
    finish: '',
    modifications: 'sel',
    otherFeatures: 'sel',
    potCodes: '',
  },
  otherState: {
    year: 'XXXX',
    serial: '-',
    weight: 'Xlbs Xoz',
    finish: '',
    modifications: '',
    otherFeatures: '',
    potCodes: '',
  },
};

export const ampFormPresets: FormPreset<IAmpFormContext> = {
  Clear: {
    formState: defaultAmpContext,
    otherState: emptyAmpContext,
    name: 'Clear',
  },
};

export const ampFormPresetReset: FormPresetReset<IAmpFormContext> = {
  formState: {
    ampYear: '',
    ampSerial: '',
  },
  otherState: {
    ampYear: 'XXXX',
    ampSerial: '-',
  },
};

export const acousticFormPresets: FormPreset<IAcousticFormContext> = {
  Clear: {
    formState: defaultAcousticContext,
    otherState: emptyAcousticContext,
    name: 'Clear',
  },
};

export const acousticFormPresetReset: FormPresetReset<IAcousticFormContext> = {
  formState: {},
  otherState: {},
};
