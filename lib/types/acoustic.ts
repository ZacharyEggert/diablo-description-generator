export type IAcousticFormContext = {};

export type IAcousticDamageAreas = {
  overallCondition: string;
  fretLife: string;
  headstockFront: string;
  headstockBack: string;
  fretboard: string;
  neckBack: string;
  neckBinding: string;
  neckPocket: string;
  bodyFront: string;
  bodyBack: string;
  bodyBinding: string;
  bridge: string;
  tailpiece: string;
  hardware: string;
};

export type IAcousticDamageContext = {
  rating: IAcousticDamageAreas;
  description: IAcousticDamageAreas;
};
