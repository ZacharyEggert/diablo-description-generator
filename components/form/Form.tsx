import React from 'react';
import { formOptions } from '../../lib/options';
import FormSelect from './FormSelect';

const Form: React.FC<{}> = () => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className='flex flex-col w-full min-h-screen px-12 pt-12 text-white bg-black bg-opacity-90'>
            <form
                className='flex flex-row flex-wrap justify-between flex-1 pb-8 mx-auto md:w-11/12'
                onSubmit={onSubmit}>
                {Object.keys(formOptions).map((key) => (
                    <FormSelect
                        label={key}
                        key={key}
                        options={formOptions[key]}
                    />
                ))}
            </form>
        </div>
    );
};

export default Form;
