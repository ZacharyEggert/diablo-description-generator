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
} from 'lib/damage/damage';
import {
  acousticFormLabelPrettier,
  ampFormLabelPrettier,
  formLabelPrettier,
} from 'lib/description/description';
import {
  manualArrayOfAcousticDamageKeys,
  manualArrayOfAcousticKeys,
  manualArrayOfAmpDamageKeys,
  manualArrayOfAmpKeys,
  manualArrayOfContextKeys,
  manualArrayOfDamageKeys,
} from 'lib/manualArrays';

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
