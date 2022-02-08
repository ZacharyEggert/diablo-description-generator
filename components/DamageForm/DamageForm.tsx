import { damageLabelPrettier, damageOptions } from 'lib/damage/damage';
import { useDamageContext } from 'lib/damageContext';
import { IDamageAreas } from 'lib/types';
import DamageSelect from './DamageSelect';
import { manualArrayOfDamageKeys } from 'lib/helpers';

const DamageForm: React.FC<{
  alterDamage: (Object: {
    rating?: Partial<IDamageAreas>;
    description?: Partial<IDamageAreas>;
  }) => void;
}> = ({ alterDamage }) => {
  const damageState = useDamageContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col w-full px-12 pt-0 pb-16 text-white'>
      <form
        className='grid grid-cols-2 px-2 pt-4 pb-4 mx-auto shadow-md lg:grid-cols-4 lg:w-10/12 bg-neutral-500 rounded-2xl shadow-neutral-900'
        onSubmit={onSubmit}>
        <h2 className='col-span-2 text-2xl font-semibold text-center lg:col-span-4'>
          Condition
        </h2>
        {manualArrayOfDamageKeys.map((key) => {
          let opt = damageOptions[key];

          return (
            <DamageSelect
              label={damageLabelPrettier[key]}
              key={key}
              field={key}
              options={opt}
              alterDamage={alterDamage}
            />
          );
        })}
      </form>
    </div>
  );
};

export default DamageForm;
