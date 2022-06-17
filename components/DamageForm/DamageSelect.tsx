import { IAcousticDamageAreas, IAmpDamageAreas, IDamageAreas } from 'lib/types';
import React, { useEffect } from 'react';
import {
  useAcousticDamageContext,
  useAmpDamageContext,
  useDamageContext,
} from 'lib/damageContext';

const DamageSelect: React.FC<{
  label: string;
  options: string[];
  field: string;
  alterDamage: (Object: {
    rating?: Partial<IDamageAreas | IAmpDamageAreas | IAcousticDamageAreas>;
    description?: Partial<
      IDamageAreas | IAmpDamageAreas | IAcousticDamageAreas
    >;
  }) => void;
  itemType: 'amplifier' | 'acoustic' | 'guitar';
}> = ({ label, options, field, alterDamage, itemType }) => {
  const [selectedRating, setSelectedRating] = React.useState('');

  const damageState = useDamageContext();
  const ampDamageState = useAmpDamageContext();
  const acousticDamageState = useAcousticDamageContext();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    let alterObject = { [field]: event.target.value };

    alterDamage({ rating: alterObject });
  };

  const handleOtherChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    let alterObject = { [field]: event.target.value };
    alterDamage({ description: alterObject });
  };

  useEffect(() => {
    if (itemType === 'amplifier') {
      setSelectedRating(ampDamageState.rating[field]);
    } else if (itemType === 'acoustic') {
      setSelectedRating(acousticDamageState.rating[field]);
    } else {
      setSelectedRating(damageState.rating[field]);
    }
  }, [damageState, field, ampDamageState, acousticDamageState, itemType]);

  return (
    <div className='col-span-1 p-2'>
      <div className='mx-auto flex w-full rounded-xl bg-neutral-600 py-2 pl-4'>
        <span className='inline-block w-1/4 text-right font-bold'>{label}</span>
        <div className='w-3/4 pl-2'>
          <select
            className='inline-block w-11/12 rounded-md bg-neutral-800'
            name={field}
            value={selectedRating}
            onChange={handleChange}>
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          <input
            value={
              itemType === 'amplifier'
                ? ampDamageState.description[field]
                : itemType === 'acoustic'
                ? acousticDamageState.description[field]
                : damageState.description[field]
            }
            onChange={handleOtherChange}
            className='inline-block w-11/12 rounded-md bg-neutral-800 pl-1'
            name={field}
          />
        </div>
      </div>
    </div>
  );
};

export default DamageSelect;
