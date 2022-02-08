import React, { useEffect } from 'react';
import { IFormContext, UseFormContext, UseOtherContext } from 'lib/context';

interface Props {
  label: string;
  options: string[];
  field: string;
  alterForm: (Object: Partial<IFormContext>) => void;
  alterOther: (Object: Partial<IFormContext>) => void;
}

const FormSelect: React.FC<Props> = ({
  label,
  options,
  field,
  alterForm,
  alterOther,
}) => {
  const [selected, setSelected] = React.useState('sel');
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

  useEffect(() => {
    setSelected(formState[field]);
  }, [formState, field]);

  useEffect(() => {
    setOther(otherState[field]);
    otherRef.current.value = otherState[field];
  }, [otherState, field]);

  return (
    <div className='col-span-1 p-2'>
      <div className='flex w-full py-2 pl-4 mx-auto bg-gray-600 rounded-3xl'>
        <span className='inline-block w-1/4 font-bold text-right'>{label}</span>
        <div className='w-3/4 pl-2'>
          <select
            className='inline-block w-11/12 bg-gray-800 rounded-md'
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
            disabled={
              selected !== '' &&
              selected !== 'Compound' &&
              field !== 'pickupNeck' &&
              field !== 'pickupMiddle' &&
              field !== 'pickupBridge'
            }
            ref={otherRef}
            type='text'
            onChange={handleOtherChange}
            defaultValue={other}
            onClick={(e) => e.stopPropagation()}
            className='w-11/12 pl-1 mt-1 bg-gray-900 rounded-md disabled:opacity-5'
          />
        </div>
      </div>
    </div>
  );
};

export default FormSelect;
