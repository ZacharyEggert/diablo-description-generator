import React from 'react';

interface Props {
    label: string;
    options: string[];
    field: string;
}

const FormSelect: React.FC<Props> = ({ label, options, field }) => {
    return (
        <div className='col-span-1 p-2'>
            <label className='flex w-full px-4 py-2 mx-auto bg-gray-800 rounded-3xl'>
                <span className='inline-block w-1/4 font-bold text-right'>
                    {label}
                </span>
                <div className='w-3/4 pl-6'>
                    <select
                        className='inline-block w-11/12 bg-gray-900'
                        name={field}>
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            );
                        })}
                        <option value='other'>Other</option>
                    </select>
                    <input type='text' className='w-11/12 bg-gray-900' />
                </div>
            </label>
        </div>
    );
};

export default FormSelect;
