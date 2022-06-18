import {
  IAcousticDamageContext,
  IAcousticFormContext,
  IAmpDamageContext,
  IAmpFormContext,
  IDamageContext,
  IFormContext,
} from 'lib/types';
import {
  acousticDamageLabelPrettier,
  ampDamageLabelPrettier,
  damageLabelPrettier,
} from './damage/damage';
import {
  acousticFormLabelPrettier,
  ampFormLabelPrettier,
  formLabelPrettier,
  make,
  tuningMachineBrands,
} from 'lib/description/description';

const whitelist = [
  ...make,
  ...tuningMachineBrands,
  'c',
  'd',
  'v',
  'u',
  'bb',
  'deluxe',
  'kluson',
  'abr-1',
  'tune-o-matic',
  'seymour',
  'duncan',
  'stratocaster',
  'strat',
  'tele',
  'telecaster',
  '498t',
  '498r',
  '490t',
  '490r',
  'graph',
  'tech',
  'Grover',
  'Gotoh',
  'Hip',
  'Shot',
  'Sperzel',
  'Schaller',
  'Floyd',
  'Rose',
].map((x) => x.toLowerCase());

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
  'ampPower',
  'ampYear',
  'ampWood',
  'ampType',
  'ampExterior',
  'ampExteriorColor',
  'ampGrillCloth',
  'ampPanel',
  'ampSerial',
  'ampPreampTubes',
  'ampPowerTubes',
  'ampSpeakerModel',
  'ampSpeakerDateCodes',
  'ampTransformerOriginality',
  'ampTransformerDateCodes',
  'ampCapacitorOriginality',
  'ampBiasRating',
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

export const fixCase = (paragraph: string): string => {
  const words = paragraph.split(' ');
  const fixed = words.map((word) => {
    if (whitelist.includes(word.toLowerCase())) {
      return word;
    }
    return word.toLowerCase();
  });

  return fixed.join(' ');
};

// return all combinations of two arrays as one array a single level deep
export const combinateArrays = (a: string[], b: string[]) => {
  const ret = a.map((x) => b.map((y) => `${x} ${y}`));
  return ret.reduce((acc, cur) => acc.concat(cur), []);
};

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

export const listify = (state: IFormContext): JSX.Element => {
  const mappedObject = manualArrayOfContextKeys.map((data, i) => {
    return data === 'name' ||
      data === 'tuningMachineHeads' ||
      data === 'tuningMachineModels' ? null : data === 'tuningMachineBrands' ? (
      <li className='' key={'li' + data}>
        Tuning Machines:{' '}
        {`${state['tuningMachineBrands']} ${state['tuningMachineModels']} with ${state['tuningMachineHeads']} Heads`}
      </li>
    ) : (
      state[data] &&
      state[data] !== '' && (
        <li className='' key={'li' + data}>
          {formLabelPrettier[data]}: {state[data]}
        </li>
      )
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};

export const listifyAmp = (state: IAmpFormContext): JSX.Element => {
  const mappedObject = manualArrayOfAmpKeys.map((data, i) => {
    return (
      state[data] &&
      state[data] !== '' && (
        <li className='' key={'li' + data}>
          {ampFormLabelPrettier[data]}: {state[data]}
        </li>
      )
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};

export const listifyAcoustic = (state: IAcousticFormContext): JSX.Element => {
  const mappedObject = manualArrayOfAcousticKeys.map((data, i) => {
    return (
      state[data] &&
      state[data] !== '' && (
        <li className='' key={'li' + data}>
          {acousticFormLabelPrettier[data]}: {state[data]}
        </li>
      )
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};

export const damageReport = (damageState: IDamageContext): JSX.Element => {
  const mappedObject = manualArrayOfDamageKeys.map((data, i) => {
    return (
      <>
        {damageState.rating[data] !== 'N/A' && (
          <li className='' key={'li' + data + 'damage'}>
            {damageLabelPrettier[data]}: {damageState.rating[data]}
          </li>
        )}
      </>
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};

export const damageReportVerbose = (
  damageState: IDamageContext,
): JSX.Element => {
  const mappedObject = manualArrayOfDamageKeys.map((data, i) => {
    return (
      <>
        {damageState.rating[data] !== 'N/A' && (
          <li className='' key={'li' + data + 'damage'}>
            {damageLabelPrettier[data]}: {damageState.rating[data]}
            {damageState.description[data] && (
              <> - {damageState.description[data]}</>
            )}
          </li>
        )}
      </>
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};

export const ampDamageReportVerbose = (
  damageState: IAmpDamageContext,
): JSX.Element => {
  const mappedObject = manualArrayOfAmpDamageKeys.map((data, i) => {
    return (
      <>
        {damageState.rating[data] !== 'N/A' && (
          <li className='' key={'li' + data + 'damage'}>
            {ampDamageLabelPrettier[data]}: {damageState.rating[data]}
            {damageState.description[data] && (
              <> - {damageState.description[data]}</>
            )}
          </li>
        )}
      </>
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};

export const acousticDamageReportVerbose = (
  damageState: IAcousticDamageContext,
): JSX.Element => {
  const mappedObject = manualArrayOfAcousticDamageKeys.map((data, i) => {
    return (
      <>
        {damageState.rating[data] !== 'N/A' && (
          <li className='' key={'li' + data + 'damage'}>
            {acousticDamageLabelPrettier[data]}: {damageState.rating[data]}
            {damageState.description[data] && (
              <> - {damageState.description[data]}</>
            )}
          </li>
        )}
      </>
    );
  });

  return <ul className='list-disc'>{mappedObject}</ul>;
};
