import { UseFormContext, UseOtherContext } from 'lib/context';
import formats, { acousticFormats, ampFormats } from './formats';

import FormatSelect from './FormatSelect';
import React from 'react';
import { useDamageContext } from 'lib/damageContext';

interface FormOutputProps {
  itemType: 'guitar' | 'amplifier' | 'acoustic';
}

const FormOutput: React.FC<FormOutputProps> = ({ itemType }) => {
  const formatRef = React.useRef<HTMLSelectElement>(null);

  const form = UseFormContext();
  const other = UseOtherContext();
  const damage = useDamageContext();

  const defaultCopy = <p>...</p>;

  const [copy, setCopy] = React.useState(defaultCopy);

  const applyFormat = () => {
    if (formatRef.current) {
      const format = formatRef.current.value;
      if (format === '') {
        setCopy(defaultCopy);
        return;
      }
      console.log(format);

      const fset =
        itemType === 'guitar'
          ? formats
          : itemType === 'amplifier'
          ? ampFormats
          : acousticFormats;

      setCopy(
        fset.filter((f) => f.name === format)[0].method(form, other, damage),
      );
    }
  };

  return (
    <>
      <div className='w-full px-12'>
        <div className='mx-auto mb-8 flex w-11/12 flex-row justify-end'>
          <FormatSelect refObj={formatRef} itemType={itemType} />
          <button
            onClick={applyFormat}
            className='ml-8 rounded-xl bg-neutral-600 px-4 py-2 text-xl'>
            Apply Copy
          </button>
        </div>
        <div className='mx-auto mb-8 flex w-11/12 flex-row items-center justify-center'>
          {copy}
        </div>
      </div>
    </>
  );
};

export default FormOutput;
