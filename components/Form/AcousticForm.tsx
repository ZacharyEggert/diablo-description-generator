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
    if (key === 'acousticModel') {
      if (
        currentOptions.acousticMake &&
        currentOptions.acousticMake !== 'sel'
      ) {
        opt = acousticFormOptions.acousticModel[currentOptions.acousticMake];
      } else {
        opt = [];
      }
    } else if (key === 'acousticSubModel') {
      if (
        currentOptions.acousticModel &&
        currentOptions.acousticMake &&
        currentOptions.acousticMake !== 'sel' &&
        currentOptions.acousticModel !== 'sel'
      ) {
        opt =
          acousticFormOptions.acousticSubModel[currentOptions.acousticMake][
            currentOptions.acousticModel
          ];
      } else {
        opt = [];
      }
    } else if (key === 'acousticTuningMachineModels') {
      if (
        currentOptions.acousticTuningMachineBrands &&
        currentOptions.acousticTuningMachineBrands !== 'sel'
      ) {
        opt =
          acousticFormOptions.acousticTuningMachineModels[
            currentOptions.acousticTuningMachineBrands
          ];
      } else {
        opt = [];
      }
    } else {
      opt = acousticFormOptions[key] as string[];
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
  const MFST = (key: keyof IAcousticFormContext) => {
    return makeFormSelect(acousticFormLabelPrettier[key], key);
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
          {MFST('acousticMake')}
          {MFST('acousticModel')}
          {MFST('acousticSubModel')}
          {MFST('acousticCountryOfOrigin')}
          {MFST('acousticYear')}
          {MFST('acousticFinish')}
          {MFST('acousticSerial')}
          {MFST('acousticCondition')}
        </div>

        <div className='col-span-2 flex min-h-[3rem] w-full flex-col lg:col-span-3'>
          {/*Neck*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Neck
            </h2>
            {MFST('acousticFingerBoard')}
            {MFST('acousticRadius')}
            {MFST('acousticNeckFinish')}
            {MFST('acousticNeckWood')}
            {MFST('acousticNeckProfile')}
            {MFST('acousticNeckThickness_1')}
            {MFST('acousticNeckThickness_12')}
            {MFST('acousticFrets')}
            {MFST('acousticScaleLength')}
            {MFST('acousticNeckJoint')}
            {MFST('acousticNut')}
            {MFST('acousticNutWidth')}
            {MFST('acousticInlays')}
          </div>
          {/*Body*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Body
            </h2>
            {MFST('acousticBackWood')}
            {MFST('acousticSideWood')}
            {MFST('acousticTopWood')}
            {MFST('acousticFinishType')}
            {MFST('acousticBodyShape')}
          </div>
        </div>

        <div className='col-span-2 flex min-h-[3rem] w-full flex-col lg:col-span-3'>
          {/*Hardware*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Hardware
            </h2>
            {MFST('acousticBridge')}
            {MFST('acousticPickguard')}
            {MFST('acousticStrapButtons')}
            {MFST('acousticStringGauge')}
            {MFST('acousticTuningMachineBrands')}
            {MFST('acousticTuningMachineModels')}
            {MFST('acousticTuningMachineHeads')}
          </div>
          {/*Electronics*/}
          <div className='mb-4 grid flex-none grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900'>
            <h2 className='text-center text-2xl font-semibold text-white lg:col-span-1'>
              Electronics
            </h2>
            {MFST('acousticElectronics')}
            {MFST('acousticElectronicsType')}
          </div>
        </div>
        {/*Misc Section*/}
        <div className='col-span-2 grid min-h-[3rem] w-full grid-cols-1 rounded-2xl bg-neutral-500 py-2 shadow-md shadow-neutral-900 lg:col-span-6 lg:grid-cols-2'>
          <h2 className='text-center text-2xl font-semibold text-white lg:col-span-2'>
            Miscellaneous
          </h2>
          {MFST('acousticWeight')}
          {MFST('acousticModifications')}
          {MFST('acousticOtherFeatures')}
          {MFST('acousticGuitarCase')}
        </div>

        {/* {Object.keys(formOptions).map((key) => {
                    let opt = [];
                    if (key === 'model') {
                        if (
                            currentOptions.make &&
                            currentOptions.make !== 'sel'
                        ) {
                            opt = acousticFormOptions.model[currentOptions.make];
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
                                acousticFormOptions.subModel[currentOptions.make][
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
                                acousticFormOptions.tuningMachineModels[
                                    currentOptions.tuningMachineBrands
                                ];
                        } else {
                            opt = [];
                        }
                    } else {
                        opt = acousticFormOptions[key];
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
