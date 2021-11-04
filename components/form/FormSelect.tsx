import React, { useEffect } from 'react';
import { UseFormContext } from '../../lib/context';
import { SVP } from '../../lib/types';

interface Props {
    label: string;
    options: string[];
    field: string;
    alterForm: (Object: SVP) => void;
}

const FormSelect: React.FC<Props> = ({ label, options, field, alterForm }) => {
    const [selected, setSelected] = React.useState('sel');

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (
        event
    ) => {
        let alterObject = { [field]: event.target.value };

        if (field === 'make') {
            alterObject['model'] = 'sel';
            alterObject['subModel'] = 'sel';
        } else if (field === 'model') {
            alterObject['subModel'] = 'sel';
        }

        alterForm(alterObject);
    };

    const formState = UseFormContext();

    useEffect(() => {
        setSelected(formState[field]);
    }, [formState, field]);

    return (
        <div className='col-span-1 p-2'>
            <label className='flex w-full px-4 py-2 mx-auto bg-gray-800 rounded-3xl'>
                <span className='inline-block w-1/4 font-bold text-right'>
                    {label}
                </span>
                <div className='w-3/4 pl-6'>
                    <select
                        className='inline-block w-11/12 bg-gray-900'
                        name={field}
                        value={selected}
                        onChange={handleChange}>
                        <option value='sel'>Select...</option>
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            );
                        })}
                        <option value=''>Other</option>
                    </select>
                    <input
                        disabled={selected !== ''}
                        type='text'
                        className='w-11/12 mt-1 bg-gray-900 disabled:opacity-5'
                    />
                </div>
            </label>
        </div>
    );
};

export default FormSelect;
