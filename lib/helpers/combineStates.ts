import { IAcousticFormContext, IAmpFormContext, IFormContext } from 'lib/types';

export const combineStates = (
  form: IFormContext,
  other: IFormContext,
): IFormContext => {
  let state = {} as IFormContext;
  for (let key in form) {
    if (form[key] !== '' && form[key] !== 'sel') {
      state[key] = form[key];
    } else {
      state[key] = other[key];
    }
    if (key === 'radius') {
      state[key] = `${form[key]} ${other[key]}`;
    }
    if (
      key === 'pickupNeck' ||
      key === 'pickupMiddle' ||
      key === 'pickupBridge'
    ) {
      state[key] = `${form[key]}${form[key] && other[key] ? ' ' : ''}${
        other[key]
      }`;
    }
  }

  return state;
};

export const combineAmpStates = (
  form: IAmpFormContext,
  other: IAmpFormContext,
): IAmpFormContext => {
  let state = {} as IAmpFormContext;
  for (let key in form) {
    if (form[key] !== '' && form[key] !== 'sel') {
      state[key] = form[key];
    } else {
      state[key] = other[key];
    }
  }

  return state;
};

export const combineAcousticStates = (
  form: IAcousticFormContext,
  other: IAcousticFormContext,
): IAcousticFormContext => {
  let state = {} as IAcousticFormContext;
  for (let key in form) {
    if (form[key] !== '' && form[key] !== 'sel') {
      state[key] = form[key];
    } else {
      state[key] = other[key];
    }
  }

  return state;
};

export const combinePickups = (
  pickupNeck: string,
  pickupMiddle: string,
  pickupBridge: string,
): string => {
  let pickupCount = 0;
  if (pickupNeck) {
    pickupCount++;
  }
  if (pickupMiddle) {
    pickupCount++;
  }
  if (pickupBridge) {
    pickupCount++;
  }

  return `${
    !!pickupNeck
      ? `a ${pickupNeck} in the neck position${pickupCount === 3 ? ',' : ''} `
      : ''
  }${
    !!pickupMiddle
      ? `${
          !pickupBridge && !!pickupNeck ? 'and ' : ''
        }a ${pickupMiddle} in the middle position${
          pickupCount === 3 ? ',' : ''
        } `
      : ''
  }${
    !!pickupBridge
      ? `${
          !!pickupNeck || !!pickupMiddle ? 'and ' : ''
        }a ${pickupBridge} in the bridge position`
      : ''
  }`;
};
