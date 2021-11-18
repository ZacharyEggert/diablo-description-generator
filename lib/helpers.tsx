import { formLabelPrettier, make, tuningMachineBrands } from './options';
import { IFormContext } from './types';
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
    other: IFormContext
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

export const combinePickups = (
    pickupNeck: string,
    pickupMiddle: string,
    pickupBridge: string
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
            ? `a ${pickupNeck} in the neck position${
                  pickupCount === 3 ? ',' : ''
              } `
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
    const manualArrayOfKeys = [
        'make',
        'model',
        'subModel',
        'year',
        'finish',
        'countryOfOrigin',
        'serial',
        'condition',
        'weight',
        'bodyType',
        'bodyWood',
        'scaleLength',
        'neckJoint',
        'neckWood',
        'neckFinish',
        'fingerboard',
        'radius',
        'neckProfile',
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
        'stringGuage',
        'guitarCase',
    ];

    const mappedObject = manualArrayOfKeys.map((data, i) => {
        return data === 'name' ||
            data === 'tuningMachineHeads' ||
            data === 'tuningMachineModels' ? null : data ===
          'tuningMachineBrands' ? (
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
