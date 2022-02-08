import { useDamageContext } from 'lib/damageContext';
import { IDamageAreas, IDamageContext } from 'lib/types';
import React, { useEffect } from 'react';

const DamageSelect: React.FC<{
    label: string;
    options: string[];
    field: string;
    alterDamage: (Object: {
        rating?: Partial<IDamageAreas>;
        description?: Partial<IDamageAreas>;
    }) => void;
}> = ({ label, options, field, alterDamage }) => {
    const [selected, setSelected] = React.useState('');

    const damageState = useDamageContext();

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (
        event,
    ) => {
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
        setSelected(damageState.rating[field]);
    }, [damageState, field]);

    return (
        <div className='col-span-1 p-2'>
            <div className='flex w-full py-2 pl-4 mx-auto bg-gray-600 rounded-xl'>
                <span className='inline-block w-1/4 font-bold text-right'>
                    {label}
                </span>
                <div className='w-3/4 pl-2'>
                    <select
                        className='inline-block w-11/12 bg-gray-800 rounded-md'
                        name={field}
                        value={selected}
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
                        value={damageState.description[field]}
                        onChange={handleOtherChange}
                        className='inline-block w-11/12 pl-1 bg-gray-800 rounded-md'
                        name={field}
                    />
                </div>
            </div>
        </div>
    );
};

export default DamageSelect;
