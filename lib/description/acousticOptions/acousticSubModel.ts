import acousticModel from './acousticModel';

const acousticSubModel: {
  [propertyA in keyof typeof acousticModel]: {
    [propertyB in typeof acousticModel[propertyA][number]]: string[];
  };
} = {
  Gibson: {
    'J-45': [
      'Standard',
      'Standard 12 String',
      'Adj',
      'Deluxe',
      'Studio',
      'Studio Walnut',
      'Studio Rosewood',
      'Original',
    ],
    'SJ-200': [
      'Standard',
      'Studio Walnut',
      'Studio Rosewood',
      'Original',
      '1957',
      'Pre-war',
    ],
    Hummingbird: ['Original', 'Standard', 'Deluxe'],
    Songwriter: [],
  },
  Martin: {
    '0-18': [],
    '00-18': [],
    '000-18': [],
    '000-28': [],
    '000-42': [],
    '00-28': [],
    'D-18': [],
    'D-28': [],
    'D-42': [],
    'D-45': [],
    'D-200': [],
  },
  Taylor: {
    '912ce': [],
    '914ce': [],
    K14ce: [],
    K22ce: [],
    K24ce: [],
    K26ce: [],
    PS12ce: [],
    PS14ce: [],
  },
  Yamaha: {
    'A Series': [],
    'L Series': [],
    CSF: [],
    'FG Series': [],
    'F Series': [],
    'APX Series': [],
    'CPX Series': [],
  },
  Takamine: {
    'Legacy Series': [],
    Limited: [],
    'Pro Series 1': [],
    'Pro Series 2': [],
    'Pro Series 3': [],
    'Pro Series 4': [],
    'Pro Series 5': [],
    'Pro Series 6': [],
    'Pro Series 7': [],
    'Signature Series': [],
  },
  Ovation: {},
  Guild: {
    'D-55': [],
  },
  Carvin: {},
  Gretsch: {},
  National: {},
  Tacoma: {},
};

export default acousticSubModel;
