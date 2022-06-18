import {
  ampDamageLabelPrettier,
  ampDamageOptions,
  damageLabelPrettier,
  damageOptions,
} from 'lib/damage/damage';

import DamageSelect from './DamageSelect';
import { IAmpDamageAreas } from 'lib/types';
import { manualArrayOfAmpDamageKeys } from 'lib/helpers';
import { useAmpDamageContext } from 'lib/damageContext';

const AmpDamageForm: React.FC<{
  alterDamage: (Object: {
    rating?: Partial<IAmpDamageAreas>;
    description?: Partial<IAmpDamageAreas>;
  }) => void;
  itemType: 'amplifier' | 'acoustic' | 'guitar';
}> = ({ alterDamage, itemType }) => {
  const damageState = useAmpDamageContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='flex w-full flex-col px-12 pt-0 pb-16 text-white'>
      <form
        className='mx-auto grid grid-cols-2 rounded-2xl bg-neutral-500 px-2 pt-4 pb-4 shadow-md shadow-neutral-900 lg:w-10/12 lg:grid-cols-4'
        onSubmit={onSubmit}>
        <h2 className='col-span-2 text-center text-2xl font-semibold lg:col-span-4'>
          Condition
        </h2>
        {manualArrayOfAmpDamageKeys.map((key) => {
          let opt = ampDamageOptions[key];

          return (
            <DamageSelect
              label={ampDamageLabelPrettier[key]}
              key={key}
              field={key}
              options={opt}
              alterDamage={alterDamage}
              itemType={itemType}
            />
          );
        })}
      </form>
    </div>
  );
};

export default AmpDamageForm;
