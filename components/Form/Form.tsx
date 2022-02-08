import React from 'react';
import { IFormContext, UseFormContext } from 'lib/context';
import {
    formLabelPrettier,
    formOptions,
    guitarCase,
} from 'lib/description/description';
import FormSelect from './FormSelect';

const Form: React.FC<{
    alterForm: (Object: Partial<IFormContext>) => void;
    alterOther: (Object: Partial<IFormContext>) => void;
}> = ({ alterForm, alterOther }) => {
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
                key={key}
                label={label}
                alterForm={alterForm}
                alterOther={alterOther}
                field={key}
                options={opt}
            />
        );
    };

    return (
        <div className='flex flex-col w-full px-12 pt-12 text-white'>
            <form
                className='grid w-full grid-cols-2 gap-4 pb-8 mx-auto lg:grid-cols-6 lg:w-10/12'
                onSubmit={onSubmit}>
                {/*General Section*/}
                <div className='grid w-full min-h-[3rem] grid-cols-1 col-span-2 py-2 rounded-2xl bg-neutral-500 lg:col-span-6 lg:grid-cols-2 shadow-md shadow-neutral-900'>
                    <h2 className='text-2xl font-semibold text-center text-white lg:col-span-2'>
                        General
                    </h2>
                    {makeFormSelect(formLabelPrettier.make, 'make')}
                    {makeFormSelect(formLabelPrettier.model, 'model')}
                    {makeFormSelect(formLabelPrettier.subModel, 'subModel')}
                    {makeFormSelect(
                        formLabelPrettier.countryOfOrigin,
                        'countryOfOrigin',
                    )}
                    {makeFormSelect(formLabelPrettier.year, 'year')}
                    {makeFormSelect(formLabelPrettier.finish, 'finish')}
                    {makeFormSelect(formLabelPrettier.serial, 'serial')}
                    {makeFormSelect(formLabelPrettier.condition, 'condition')}
                </div>

                <div className='flex flex-col w-full min-h-[3rem] col-span-2 lg:col-span-3'>
                    {/*Neck*/}
                    <div className='grid flex-none grid-cols-1 py-2 mb-4 shadow-md rounded-2xl bg-neutral-500 shadow-neutral-900'>
                        <h2 className='text-2xl font-semibold text-center text-white lg:col-span-1'>
                            Neck
                        </h2>
                        {makeFormSelect(
                            formLabelPrettier.fingerBoard,
                            'fingerBoard',
                        )}
                        {makeFormSelect(formLabelPrettier.radius, 'radius')}
                        {makeFormSelect(
                            formLabelPrettier.neckFinish,
                            'neckFinish',
                        )}
                        {makeFormSelect(formLabelPrettier.neckWood, 'neckWood')}
                        {makeFormSelect(
                            formLabelPrettier.neckProfile,
                            'neckProfile',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.neckThickness_1,
                            'neckThickness_1',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.neckThickness_12,
                            'neckThickness_12',
                        )}
                        {makeFormSelect(formLabelPrettier.frets, 'frets')}
                        {makeFormSelect(
                            formLabelPrettier.scaleLength,
                            'scaleLength',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.neckJoint,
                            'neckJoint',
                        )}
                        {makeFormSelect(formLabelPrettier.nut, 'nut')}
                        {makeFormSelect(formLabelPrettier.nutWidth, 'nutWidth')}
                        {makeFormSelect(formLabelPrettier.inlays, 'inlays')}
                    </div>
                    {/*Body*/}
                    <div className='grid flex-none grid-cols-1 py-2 mb-4 shadow-md rounded-2xl bg-neutral-500 shadow-neutral-900'>
                        <h2 className='text-2xl font-semibold text-center text-white lg:col-span-1'>
                            Body
                        </h2>
                        {makeFormSelect(formLabelPrettier.bodyType, 'bodyType')}
                        {makeFormSelect(formLabelPrettier.bodyWood, 'bodyWood')}
                        {makeFormSelect(
                            formLabelPrettier.finishType,
                            'finishType',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.bodyShape,
                            'bodyShape',
                        )}
                        {makeFormSelect(formLabelPrettier.topWood, 'topWood')}
                    </div>
                </div>

                <div className='flex flex-col w-full min-h-[3rem] col-span-2 lg:col-span-3'>
                    {/*Hardware*/}
                    <div className='grid flex-none grid-cols-1 py-2 mb-4 shadow-md rounded-2xl bg-neutral-500 shadow-neutral-900'>
                        <h2 className='text-2xl font-semibold text-center text-white lg:col-span-1'>
                            Hardware
                        </h2>
                        {makeFormSelect(formLabelPrettier.bridge, 'bridge')}
                        {makeFormSelect(formLabelPrettier.knobs, 'knobs')}
                        {makeFormSelect(formLabelPrettier.hardware, 'hardware')}
                        {makeFormSelect(
                            formLabelPrettier.pickguard,
                            'pickguard',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.strapButtons,
                            'strapButtons',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.stringGauge,
                            'stringGauge',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.tuningMachineBrands,
                            'tuningMachineBrands',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.tuningMachineModels,
                            'tuningMachineModels',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.tuningMachineHeads,
                            'tuningMachineHeads',
                        )}
                    </div>
                    {/*Electronics*/}
                    <div className='grid flex-none grid-cols-1 py-2 mb-4 shadow-md rounded-2xl bg-neutral-500 shadow-neutral-900'>
                        <h2 className='text-2xl font-semibold text-center text-white lg:col-span-1'>
                            Electronics
                        </h2>
                        {makeFormSelect(
                            formLabelPrettier.pickupConfiguration,
                            'pickupConfiguration',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.pickupNeck,
                            'pickupNeck',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.pickupMiddle,
                            'pickupMiddle',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.pickupBridge,
                            'pickupBridge',
                        )}
                        {makeFormSelect(formLabelPrettier.pots, 'pots')}
                        {makeFormSelect(
                            formLabelPrettier.pickupSwitch,
                            'pickupSwitch',
                        )}
                        {makeFormSelect(formLabelPrettier.coilTap, 'coilTap')}
                        {makeFormSelect(
                            formLabelPrettier.killSwitch,
                            'killSwitch',
                        )}
                        {makeFormSelect(
                            formLabelPrettier.phaseSwitch,
                            'phaseSwitch',
                        )}
                    </div>
                </div>
                {/*Misc Section*/}
                <div className='grid w-full min-h-[3rem] grid-cols-1 col-span-2 py-2 rounded-2xl bg-neutral-500 lg:col-span-6 lg:grid-cols-2 shadow-md shadow-neutral-900'>
                    <h2 className='text-2xl font-semibold text-center text-white lg:col-span-2'>
                        Miscellaneous
                    </h2>
                    {makeFormSelect(formLabelPrettier.weight, 'weight')}
                    {makeFormSelect(
                        formLabelPrettier.modifications,
                        'modifications',
                    )}
                    {makeFormSelect(
                        formLabelPrettier.otherFeatures,
                        'otherFeatures',
                    )}
                    {makeFormSelect(formLabelPrettier.guitarCase, 'guitarCase')}
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

export default Form;
