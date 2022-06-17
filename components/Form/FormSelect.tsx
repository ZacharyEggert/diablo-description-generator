import { IAcousticFormContext, IAmpFormContext } from 'lib/types';
import { IFormContext, UseFormContext, UseOtherContext } from 'lib/context';
import React, { useEffect } from 'react';
import {
  UseAcousticFormContext,
  UseAcousticOtherContext,
} from 'lib/acousticContext';
import { UseAmpFormContext, UseAmpOtherContext } from 'lib/ampContext';

interface Props {
  label: string;
  options: string[];
  field: string;
  alterForm: (
    Object: Partial<IFormContext | IAmpFormContext | IAcousticFormContext>,
  ) => void;
  alterOther: (
    Object: Partial<IFormContext | IAmpFormContext | IAcousticFormContext>,
  ) => void;
  itemType: 'guitar' | 'amplifier' | 'acoustic';
}

const FormSelect: React.FC<Props> = ({
  label,
  options,
  field,
  alterForm,
  alterOther,
  itemType,
}) => {
  const [selectedOpt, setSelectedOpt] = React.useState('sel');
  const [other, setOther] = React.useState('');
  const otherRef = React.useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    let alterObject = { [field]: event.target.value };

    if (field === 'make') {
      alterObject['model'] = 'sel';
      alterObject['subModel'] = 'sel';
    } else if (field === 'model') {
      alterObject['subModel'] = 'sel';
    } else if (field === 'tuningMachineBrand') {
      alterObject['tuningMachineModel'] = 'sel';
    }

    alterForm(alterObject);
  };

  const handleOtherChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let alterObject = { [field]: e.target.value };
    alterOther(alterObject);
  };

  const formState = UseFormContext();
  const otherState = UseOtherContext();

  const ampFormState = UseAmpFormContext();
  const ampOtherState = UseAmpOtherContext();

  const acousticFormState = UseAcousticFormContext();
  const acousticOtherState = UseAcousticOtherContext();

  useEffect(() => {
    if (itemType === 'guitar') {
      setSelectedOpt(formState[field]);
    } else if (itemType === 'amplifier') {
      setSelectedOpt(ampFormState[field]);
    } else if (itemType === 'acoustic') {
      setSelectedOpt(acousticFormState[field]);
    }
  }, [formState, field, ampFormState, acousticFormState, itemType]);

  useEffect(() => {
    if (itemType === 'guitar') {
      setOther(otherState[field]);
      otherRef.current.value = otherState[field];
    } else if (itemType === 'amplifier') {
      setOther(ampOtherState[field]);
      otherRef.current.value = ampOtherState[field];
    } else if (itemType === 'acoustic') {
      setOther(acousticOtherState[field]);
      otherRef.current.value = acousticOtherState[field];
    }
  }, [otherState, field, ampOtherState, acousticOtherState, itemType]);

  return (
    <div className='col-span-1 p-2'>
      <div className='mx-auto flex w-full rounded-3xl bg-neutral-600 py-2 pl-4'>
        <span className='inline-block w-1/4 text-right font-bold'>{label}</span>
        <div className='w-3/4 pl-2'>
          <select
            className='inline-block w-11/12 rounded-md bg-neutral-800'
            name={field}
            value={selectedOpt}
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
            disabled={
              selectedOpt !== '' &&
              selectedOpt !== 'Compound' &&
              field !== 'pickupNeck' &&
              field !== 'pickupMiddle' &&
              field !== 'pickupBridge'
            }
            ref={otherRef}
            type='text'
            onChange={handleOtherChange}
            defaultValue={other}
            onClick={(e) => e.stopPropagation()}
            className='mt-1 w-11/12 rounded-md bg-neutral-900 pl-1 disabled:opacity-5'
          />
        </div>
      </div>
    </div>
  );
};

export default FormSelect;
