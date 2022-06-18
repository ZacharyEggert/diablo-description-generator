import {
  acousticFormLabelPrettier,
  acousticFormOptions,
} from 'lib/description/description';

import FormSelect from './FormSelect';
import { IAcousticFormContext } from 'lib/types';
import React from 'react';
import { UseAcousticFormContext } from 'lib/acousticContext';

const AcousticForm: React.FC<{
  alterForm: (Object: Partial<IAcousticFormContext>) => void;
  alterOther: (Object: Partial<IAcousticFormContext>) => void;
  itemType: 'guitar' | 'amplifier' | 'acoustic';
}> = ({ alterForm, alterOther, itemType }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const currentOptions = UseAcousticFormContext();

  const makeFormSelect = (label: string, key: keyof IAcousticFormContext) => {
    let opt = [];

    opt = acousticFormOptions[key];

    return (
      <FormSelect
        key={key}
        label={label}
        alterForm={alterForm}
        alterOther={alterOther}
        field={key}
        options={opt}
        itemType={itemType}
      />
    );
  };

  return (
    <div className='flex w-full flex-col px-12 pt-12 text-white'>
      <form
        className='mx-auto grid w-full grid-cols-2 gap-4 pb-8 lg:w-10/12 lg:grid-cols-6'
        onSubmit={onSubmit}>
        {/*General Section*/}
        <div className='col-span-2 grid min-h-[3rem] w-full grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900 lg:col-span-6 lg:grid-cols-2'>
          <h2 className='text-center text-2xl font-semibold text-white lg:col-span-2'>
            General
          </h2>
        </div>

        <div className='col-span-2 flex min-h-[3rem] w-full flex-col lg:col-span-3'>
          {/*Neck*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Neck
            </h2>
          </div>
          {/*Body*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Body
            </h2>
          </div>
        </div>

        <div className='col-span-2 flex min-h-[3rem] w-full flex-col lg:col-span-3'>
          {/*Hardware*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Hardware
            </h2>
          </div>
          {/*Electronics*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Electronics
            </h2>
          </div>
        </div>
        {/*Misc Section*/}
        <div className='col-span-2 grid min-h-[3rem] w-full grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900 lg:col-span-6 lg:grid-cols-2'>
          <h2 className='text-center text-2xl font-semibold text-white lg:col-span-2'>
            Miscellaneous
          </h2>
        </div>

        {/* {Object.keys(formOptions).map((key) => {
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
                    } else if (key === 'tuningMachineModels') {
                        if (
                            currentOptions.tuningMachineBrands &&
                            currentOptions.tuningMachineBrands !== 'sel'
                        ) {
                            opt =
                                formOptions.tuningMachineModels[
                                    currentOptions.tuningMachineBrands
                                ];
                        } else {
                            opt = [];
                        }
                    } else {
                        opt = formOptions[key];
                    }

                    if (
                        (key === 'pickupNeck' || key === 'pickupMiddle') &&
                        (currentOptions.pickupConfiguration === 'sel' ||
                            currentOptions.pickupConfiguration.length === 1)
                    ) {
                        return null;
                    } else if (
                        key === 'pickupMiddle' &&
                        currentOptions.pickupConfiguration.length === 2
                    ) {
                        return null;
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
                })} */}
      </form>
    </div>
  );
};

export default AcousticForm;
