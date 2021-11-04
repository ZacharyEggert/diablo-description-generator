export const make = [
    'Fender',
    'Gibson',
    'Jackson',
    'PRS',
    'Washburn',
    'ESP',
    'Gretsch',
    'G&L',
    'Knaggs',
    'Ibanez',
    'Epiphone',
    'Schecter',
    'Caparison',
    'Carvin',
    'Kiesel',
];

export const model = {
    Fender: [
        'Stratocaster',
        'Telecaster',
        'Esquire',
        'Nocaster',
        'Jaguar',
        'Jazzmaster',
    ],
    Gibson: ['Les Paul', 'SG', 'Firebird', 'Explorer', 'Flying V', 'M3'],
    Jackson: [
        'Dinky',
        'Kelly',
        'King V',
        'Monarkh',
        'Rhoads',
        'San Dimas',
        'Soloist',
    ],
    PRS: ['Custom 24', 'McCarty', '509', 'Studio', 'CE 24', 'S2', 'SE'],
    Washburn: ['Nuno', 'S10', 'S20', 'S2H', 'V26'],
    ESP: ['Vintage', 'Kamikaze'],
    Gretsch: ['Falcon', 'G6'],
    'G&L': ['Asat', 'Commanche'],
    Knaggs: ['Chop Tank', 'Steve Stevens'],
    Ibanez: [],
    Epiphone: ['Les Paul', 'SG', 'Firebird', 'Explorer', 'Flying V', 'M3'],
    Schecter: [],
    Caparison: ['Orbit'],
    Carvin: ['DC', 'CS', 'AC'],
    Kiesel: ['DC', 'CS', 'AC'],
};

export const subModel = {
    Fender: {
        Stratocaster: [
            'American Deluxe',
            'American Standard',
            'American Vintage',
        ],
        Telecaster: [],
        Esquire: [],
        Nocaster: [],
        Jaguar: [],
        Jazzmaster: [],
    },
    Gibson: {
        'Les Paul': ['Standard', 'Custom', 'Special', 'Junior', 'Studio'],
        SG: [],
        Firebird: [],
        Explorer: [],
        FlyingV: [],
        M3: [],
    },
    Jackson: {
        Dinky: [],
        Kelly: [],
        KingV: [],
        Monarkh: [],
        Rhoads: [],
        SanDimas: [],
        Soloist: [],
    },
    PRS: {
        'Custom 24': [],
        McCarty: [],
        509: [],
        Studio: [],
        CE24: [],
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
        Asat: [],
        Commanche: [],
    },
    Knaggs: {
        ChopTank: [],
        SteveStevens: [],
    },
    Ibanez: {},
    Epiphone: {
        LesPaul: ['Standard', 'Custom', 'Special', 'Junior', 'Studio'],
        SG: [],
        Firebird: [],
        Explorer: [],
        FlyingV: [],
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

export const country = ['USA', 'Mexico', 'Japan', 'Indonesia', 'Vietnam'];

export const condition = [
    'Mint',
    'Excellent',
    'Very Good',
    'Good',
    'Fair',
    'Poor',
];

export const bodyType = ['Solid', 'Semi-Hollow', 'Hollow'];

export const bodyWood = [
    'Alder',
    'Ash',
    'Mahogany',
    'Korina',
    'Poplar',
    'Maple',
    'Rosewood',
    'Koa',
    'Basswood',
    'Walnut',
];

export const scaleLength = [25.5, 24.75, 24, 24.5, 25, 26.5, 27];
export const neckJoint = ['Bolt-on', 'Set Neck', 'Neck-through'];

export const neckWood = [
    'Maple',
    'Koa',
    'Rosewood',
    'Mahogany',
    'Wenge',
    'Walnut',
    'Korina',
    'Purpleheart',
];

export const fingerBoardMaterial = [
    'Maple',
    'Rosewood',
    'Ebony',
    'Pau Ferro',
    'Laurel',
    'Wenge',
    'Walnut',
    'Blackwood',
    'Purpleheart',
];

export const radius = [7.25, 9.5, 10, 12, 14, 15, 16, 20, 'Flat'];

export const neckProfile = [
    'Modern C',
    'Chunky C',
    'C',
    'D',
    'Hard V',
    'V',
    'U',
    'BB',
    'Asymmetrical',
    'Pattern',
    'Rounded',
    'Slim Taper',
];

export const inlays = [
    'Acrylic Dot',
    'Pearloid Dot',
    'Abalone Dot',
    'Black Dot',
    'White Dot',
    'Acrylic Trapezoid',
    'Pearloid Trapezoid',
    'Abalone Trapezoid',
    'Mother of Pearl Block',
    'Abalone Block',
    'Sharkfin',
    'Reverse Sharkfin',
];
export const nutWidth = [
    1.6875, 1.685, 1.656, 1.6, 1.65, 1.625, 1.575, 1.687, 1.69, 1.66, 1.695,
].sort((a, b) => a - b);
export const nutMaterial = [
    'Bone',
    'Fossil Ivory',
    'Plastic',
    'Graphite',
    'Ebony',
    'Synthetic Bone',
    'Tektoid',
    'Floyd Locking',
    'Kahler Locking',
    'Fender LSR Roller Nut',
];
export const frets = [
    '22 Medium Jumbo',
    '21 Medium Jumbo',
    '22 Medium',
    '21 Medium',
    '22 Medium Tall',
    '21 Medium Tall',
    '22 Jumbo',
    '21 Jumbo',
];
export const pickupConfiguration = [
    'HH',
    'HHH',
    'H',
    'SSS',
    'HSS',
    'HSH',
    'SS',
    'HS',
    'S',
];
export const pickguard = [
    '3-Ply White/Black',
    '3-Ply Black/White',
    '5-Ply White/Black',
    '5-Ply Black/White',
    'Single-Ply Black',
    'Single-Ply White',
    'Mirror',
    'Gold',
    'Tortoise Shell',
];
export const controls = [
    '2-Volume, 2-Tone',
    '1-Volume, 2-Tone',
    '1-Volume, 1-Tone',
    '2-Volume, 1-Tone',
    'One Master Volume',
];
export const switches = [
    '3-Way Toggle Switch',
    '5-Way Blade Switch',
    '3-Way Blade Switch',
];
export const hardware = ['Nickel', 'Black', 'Gold', 'Aged Nickel', 'Aged Gold'];
export const knobs = [
    'Black Top Hat',
    'White Top Hat',
    'Cream Top Hat',
    'Amber Top Hat',
    'Gold Top Hat',
    'Black Speed',
    'White Speed',
    'Amber Speed',
    'Gold Speed',
    'Knurled Chrome Dome',
    'Knurled Chrome',
    'Knurled Black Dome',
    'Knurled Black',
    'Knurled Gold Dome',
    'Knurled Gold',
    'Vintage Reflector',
];

export const otherFeatures = [
    'Certificate of Authenticity',
    'Original Case Candy',
];
export const stringGauge = ['10-46', '9-42', '9-46'];
export const guitarCase = ['Original Hard Shell Case', 'Gator Hard Shell Case'];

export const bridge = ['ABR-1 Tune-O-Matic'];
export const tuningMachines = ['Vintage Kluson', 'Gibson Branded Schaller', 'Gibson Branded Schaller Locking'];

export const formOptions = {
    make,
    model,
    year: [],
    finish: [],
    countryOfOrigin: country,
    serial: [],
    condition,
    weight: [],
    bodyType,
    bodyWood,
    scaleLength,
    neckJoint,
    neckWood,
    neckFinish: [],
    fingerBoard: fingerBoardMaterial,
    radius,
    neckProfile,
    inlays,
    nutWidth,
    nut: nutMaterial,
    frets,
    pickups: [],
    pickupConfiguration,
    pickguard,
    controls,
    switches,
    hardware,
    tuningMachines,
    bridge,
    knobs,
    modifications: [],
    otherFeatures,
    stringGauge,
    guitarCase,
};
