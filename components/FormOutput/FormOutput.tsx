import {
  UseAcousticFormContext,
  UseAcousticOtherContext,
} from 'lib/acousticContext';
import { UseAmpFormContext, UseAmpOtherContext } from 'lib/ampContext';
import { UseFormContext, UseOtherContext } from 'lib/context';
import formats, { acousticFormats, ampFormats } from './formats';
import {
  useAcousticDamageContext,
  useAmpDamageContext,
  useDamageContext,
} from 'lib/damageContext';

import FormatSelect from './FormatSelect';
import React from 'react';

interface FormOutputProps {
  itemType: 'guitar' | 'amplifier' | 'acoustic';
}

const FormOutput: React.FC<FormOutputProps> = ({ itemType }) => {
  const formatRef = React.useRef<HTMLSelectElement>(null);

  const form = UseFormContext();
  const other = UseOtherContext();
  const damage = useDamageContext();

  const ampForm = UseAmpFormContext();
  const acousticForm = UseAcousticFormContext();

  const ampOther = UseAmpOtherContext();
  const acousticOther = UseAcousticOtherContext();

  const ampDamage = useAmpDamageContext();
  const acousticDamage = useAcousticDamageContext();

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

      if (itemType === 'guitar') {
        setCopy(
          formats
            .filter((f) => f.name === format)[0]
            .method(form, other, damage),
        );
      } else if (itemType === 'amplifier') {
        setCopy(
          ampFormats
            .filter((f) => f.name === format)[0]
            .method(ampForm, ampOther, ampDamage),
        );
      } else if (itemType === 'acoustic') {
        setCopy(
          acousticFormats
            .filter((f) => f.name === format)[0]
            .method(acousticForm, acousticOther, acousticDamage),
        );
      }
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
