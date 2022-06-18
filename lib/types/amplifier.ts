export type IAmpFormContext = {
  ampMake: string;
  ampModel: string;
  ampSubModel: string;
  ampYear: string;
  ampType: string;
  ampPower: string;
  ampExteriorColor: string;
  ampExterior: string;
  ampGrillCloth: string;
  ampPanel: string;
  ampWood: string;
  ampSerial: string;
  ampPreampTubes: string;
  ampPowerTubes: string;
  ampSpeakerModel: string;
  ampSpeakerDateCodes: string;
  ampTransformerDateCodes: string;
  ampTransformerOriginality: string;
  ampCapacitorOriginality: string;
  ampBiasRating: string;
};

export type IAmpDamageAreas = {
  overallCondition: string;
};

export type IAmpDamageContext = {
  rating: IAmpDamageAreas;
  description: IAmpDamageAreas;
};
