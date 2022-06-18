import { IFormContext, UseFormContext } from 'lib/context';
import {
  formLabelPrettier,
  formOptions,
  guitarCase,
} from 'lib/description/description';

import FormSelect from './FormSelect';
import React from 'react';

const GuitarForm: React.FC<{
  alterForm: (Object: Partial<IFormContext>) => void;
  alterOther: (Object: Partial<IFormContext>) => void;
  itemType: 'guitar';
}> = ({ alterForm, alterOther, itemType }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const currentOptions = UseFormContext();

  const makeFormSelect = (label: string, key: keyof IFormContext) => {
    let opt = [];
    if (key === 'model') {
      if (currentOptions.make && currentOptions.make !== 'sel') {
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
        opt = formOptions.subModel[currentOptions.make][currentOptions.model];
      } else {
        opt = [];
      }
    } else if (key === 'tuningMachineModels') {
      if (
        currentOptions.tuningMachineBrands &&
        currentOptions.tuningMachineBrands !== 'sel'
      ) {
        opt =
          formOptions.tuningMachineModels[currentOptions.tuningMachineBrands];
      } else {
        opt = [];
      }
    } else {
      opt = formOptions[key] as string[];
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

  /**
   *
   * @param key key of IFormContext to generate a selection for.
   * @returns a FormSelect JSX element.
   * @description generates a FormSelect element for the given key.
   */
  const MFST = (key: keyof IFormContext) => {
    return makeFormSelect(formLabelPrettier[key], key);
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
          {MFST('make')}
          {MFST('model')}
          {MFST('subModel')}
          {MFST('countryOfOrigin')}
          {MFST('year')}
          {MFST('finish')}
          {MFST('serial')}
          {MFST('condition')}
        </div>

        <div className='col-span-2 flex min-h-[3rem] w-full flex-col lg:col-span-3'>
          {/*Neck*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Neck
            </h2>
            {MFST('fingerBoard')}
            {MFST('radius')}
            {MFST('neckFinish')}
            {MFST('neckWood')}
            {MFST('neckProfile')}
            {MFST('neckThickness_1')}
            {MFST('neckThickness_12')}
            {MFST('frets')}
            {MFST('scaleLength')}
            {MFST('neckJoint')}
            {MFST('nut')}
            {MFST('nutWidth')}
            {MFST('inlays')}
          </div>
          {/*Body*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Body
            </h2>
            {MFST('bodyType')}
            {MFST('bodyWood')}
            {MFST('finishType')}
            {MFST('bodyShape')}
            {MFST('topWood')}
          </div>
        </div>

        <div className='col-span-2 flex min-h-[3rem] w-full flex-col lg:col-span-3'>
          {/*Hardware*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Hardware
            </h2>
            {MFST('bridge')}
            {MFST('knobs')}
            {MFST('hardware')}
            {MFST('pickguard')}
            {MFST('strapButtons')}
            {MFST('stringGauge')}
            {MFST('tuningMachineBrands')}
            {MFST('tuningMachineModels')}
            {MFST('tuningMachineHeads')}
          </div>
          {/*Electronics*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Electronics
            </h2>
            {MFST('pickupConfiguration')}
            {MFST('pickupNeck')}
            {MFST('pickupMiddle')}
            {MFST('pickupBridge')}
            {MFST('pots')}
            {MFST('potCodes')}
            {MFST('pickupSwitch')}
            {MFST('coilTap')}
            {MFST('killSwitch')}
            {MFST('phaseSwitch')}
          </div>
        </div>
        {/*Misc Section*/}
        <div className='col-span-2 grid min-h-[3rem] w-full grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900 lg:col-span-6 lg:grid-cols-2'>
          <h2 className='text-center text-2xl font-semibold text-white lg:col-span-2'>
            Miscellaneous
          </h2>
          {MFST('weight')}
          {MFST('modifications')}
          {MFST('otherFeatures')}
          {MFST('guitarCase')}
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

export default GuitarForm;
