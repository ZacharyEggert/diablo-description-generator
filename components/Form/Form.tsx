import React from 'react';
import { IFormContext, UseFormContext } from '../../lib/context';
import { formLabelPrettier, formOptions } from '../../lib/options';
import FormSelect from './FormSelect';

const Form: React.FC<{ alterForm: (Object: Partial<IFormContext>) => void, alterOther:(Object:Partial<IFormContext>)=>void  }> = ({
    alterForm,
    alterOther
}) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const currentOptions = UseFormContext();

    return (
        <div className='flex flex-col w-full min-h-screen px-12 pt-12 text-white'>
            <form
                className='grid grid-cols-2 pb-8 mx-auto md:grid-cols-4 md:w-11/12'
                onSubmit={onSubmit}>
                {Object.keys(formOptions).map((key) => {
                    let opt = [];
                    if (key === 'model') {
                        if (
                            currentOptions.make &&
                            currentOptions.make !== 'sel'
                        ) {
                            opt = formOptions.model[currentOptions.make];
                        } else {
                            opt = [];
                        }
                    } else if (key === 'subModel') {
                        if (
                            currentOptions.model &&
                            currentOptions.make &&
                            currentOptions.make !== 'sel' &&
                            currentOptions.model !== 'sel'
                        ) {
                            opt =
                                formOptions.subModel[currentOptions.make][
                                    currentOptions.model
                                ];
                        } else {
                            opt = [];
                        }
                    } else {
                        opt = formOptions[key];
                    }
                    return (
                        <FormSelect
                            label={formLabelPrettier[key]}
                            key={key}
                            field={key}
                            options={opt}
                            alterForm={alterForm}
                            alterOther={alterOther}
                        />
                    );
                })}
            </form>
        </div>
    );
};

export default Form;
