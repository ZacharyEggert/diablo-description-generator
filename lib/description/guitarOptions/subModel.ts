import model from './model';

const subModel: {
  [propertyA in keyof typeof model]: {
    [propertyB in typeof model[propertyA][number]]: string[];
  };
} = {
  Fender: {
    Stratocaster: [
      'American Standard',
      'American Deluxe',
      'American Ultra',
      'American Elite',
      "American Original '50s",
      'American Vintage',
      'American Performer',
      'Hardtail',
      'VG',
      'Masterbuilt',
    ],
    Telecaster: [
      'American Vintage',
      'American Performer',
      'American Professional',
      'Thinline Semihollow',
      'Hot Rod',
      'Masterbuilt',
    ],
    Esquire: [],
    Nocaster: [],
    Jaguar: [],
    Jazzmaster: ['American Vintage'],
  },
  Gibson: {
    'Les Paul': [
      'Standard',
      'Custom',
      'Classic',
      'Studio',
      'Tribute',
      'Special',
      'Special Tribute',
      'Junior',
      "Standard '50s",
      "Standard '60s",
      "'70s Deluxe",
      'Modern',
      'Traditional',
      'Traditional Pro',
    ],
    SG: [
      'Special',
      'Standard',
      'Tribute',
      "Standard '61",
      "Standard '61 Maestro Vibrola",
      "Standard '61 Sideways Vibrola",
      'Junior',
      'Modern',
    ],
    Firebird: ['I', 'III', 'V', 'VII'],
    Explorer: [],
    'Flying V': [],
    M3: [],
    RD: ['Artist'],
    'ES-335': [],
    'ES-345': [],
    'ES-339': [],
    'ES-347': [],
  },
  Jackson: {
    Dinky: [
      'DK1',
      'DK2',
      'DK2M',
      'DK2S',
      'DK2T',
      'DK2FF',
      'DK2FS',
      'DK3',
      'DR3',
      'DKMG',
      'DKMGT',
      'DXMG',
      'DKXT',
    ],
    Kelly: ['KE3', 'KE4', 'KV3'],
    'King V': [
      'KV',
      'KVT',
      'KV6',
      'KV7',
      'KV6Q',
      'KV7Q',
      'KVTMG',
      'KVXMG',
      'JS32',
      'JS32T',
    ],
    Monarkh: [],
    Rhoads: ['RR1', 'RR0.5', 'RR24'],
    'San Dimas': ['Style 1', 'Style 2'],
    'So-Cal': ['Style 1', 'Style 2'],
    Soloist: ['SL1', 'SL2', 'SL2H', 'SLS', 'SL3', 'SL3R', 'SL3X'],
  },
  Charvel: {
    Dinky: [
      'DK1',
      'DK2',
      'DK2M',
      'DK2S',
      'DK2T',
      'DK2FF',
      'DK2FS',
      'DK3',
      'DR3',
      'DKMG',
      'DKMGT',
      'DXMG',
      'DKXT',
    ],
    Kelly: ['KE3', 'KE4', 'KV3'],
    'King V': [
      'KV',
      'KVT',
      'KV6',
      'KV7',
      'KV6Q',
      'KV7Q',
      'KVTMG',
      'KVXMG',
      'JS32',
      'JS32T',
    ],
    Monarkh: [],
    Rhoads: [],
    'San Dimas': ['Style 1', 'Style 2'],
    'So-Cal': ['Style 1', 'Style 2'],
    Soloist: ['SL1', 'SL2', 'SL2H', 'SLS', 'SL3', 'SL3R', 'SL3X'],
  },
  PRS: {
    'Custom 24': [],
    McCarty: [],
    509: [],
    Studio: [],
    'CE 24': [],
    S2: [],
    SE: [],
  },
  Washburn: {
    Nuno: [],
    S10: [],
    S20: [],
    S2H: [],
    V26: [],
  },
  ESP: {
    Vintage: [],
    Kamikaze: [],
  },
  Gretsch: {
    Falcon: [],
    G6: [],
  },
  'G&L': {
    Asat: ['Signature'],
    Commanche: [],
    Legacy: ['Signature'],
  },
  Knaggs: {
    'Chop Tank': [],
    'Steve Stevens': [],
  },
  Ibanez: {},
  Epiphone: {
    'Les Paul': ['Standard', 'Custom', 'Special', 'Junior', 'Studio'],
    SG: [],
    Firebird: ['I', 'III', 'V', 'VII'],
    Explorer: [],
    'Flying V': [],
    M3: [],
  },
  Schecter: {},
  Caparison: {
    Orbit: [],
  },
  Carvin: {
    DC: [],
    CS: [],
    AC: [],
  },
  Kiesel: {
    DC: [],
    CS: [],
    AC: [],
  },
};

export default subModel;
