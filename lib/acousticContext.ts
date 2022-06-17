import { createContext, useContext } from 'react';

import { IAcousticFormContext } from 'lib/types';

export type { IAcousticFormContext } from 'lib/types';

export const defaultAcousticContext: IAcousticFormContext = {};

export const emptyAcousticContext: IAcousticFormContext = {};

export const AcousticFormContext = createContext<IAcousticFormContext>(
  defaultAcousticContext,
);
export const UseAcousticFormContext = () => useContext(AcousticFormContext);

export const AcousticOtherContext =
  createContext<IAcousticFormContext>(emptyAcousticContext);
export const UseAcousticOtherContext = () => useContext(AcousticOtherContext);
