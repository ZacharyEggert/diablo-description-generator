import { acousticDamageLabelPrettier } from 'lib/damage/damage';
import { acousticFormLabelPrettier } from 'lib/description/description';

export type IAcousticFormContext = typeof acousticFormLabelPrettier;

export type IAcousticDamageAreas = typeof acousticDamageLabelPrettier;

// export type IAcousticDamageAreas = {
//   overallCondition: string;
//   fretLife: string;
//   headstockFront: string;
//   headstockBack: string;
//   fretboard: string;
//   neckBack: string;
//   neckBinding: string;
//   neckPocket: string;
//   bodyFront: string;
//   bodyBack: string;
//   bodyBinding: string;
//   bridge: string;
//   tailpiece: string;
//   hardware: string;
// };

export type IAcousticDamageContext = {
  rating: IAcousticDamageAreas;
  description: IAcousticDamageAreas;
};
