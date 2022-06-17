import { acousticFormats, ampFormats } from './formats';

import React from 'react';
import formats from './formats';

interface FormatSelectProps {
  refObj: React.RefObject<HTMLSelectElement>;
  itemType: 'guitar' | 'amplifier' | 'acoustic';
}

const FormatSelect: React.FC<FormatSelectProps> = ({ refObj, itemType }) => {
  return (
    <select ref={refObj} className='w-72 text-xl'>
      <option value='' className='bg-neutral-800'>
        Select...
      </option>
      {itemType === 'guitar'
        ? formats.map((format) => (
            <option
              key={format.name}
              value={format.name}
              className='bg-neutral-800'>
              {format.name}
            </option>
          ))
        : itemType === 'amplifier'
        ? ampFormats.map((format) => (
            <option
              key={format.name}
              value={format.name}
              className='bg-neutral-800'>
              {format.name}
            </option>
          ))
        : acousticFormats.map((format) => (
            <option
              key={format.name}
              value={format.name}
              className='bg-neutral-800'>
              {format.name}
            </option>
          ))}
    </select>
  );
};

export default FormatSelect;
