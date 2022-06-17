import { UseFormContext, UseOtherContext } from 'lib/context';

import FormatSelect from './FormatSelect';
import React from 'react';
import formats from './formats';
import { useDamageContext } from 'lib/damageContext';

interface FormOutputProps {}

const FormOutput: React.FC<FormOutputProps> = ({}) => {
  const formatRef = React.useRef<HTMLSelectElement>(null);

  const form = UseFormContext();
  const other = UseOtherContext();
  const damage = useDamageContext();

  const defaultCopy = (
    <p>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
      labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
      Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
      Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
      occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
      officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
      Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
      excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco
      ut ea consectetur et est culpa et culpa duis.
    </p>
  );

  const [copy, setCopy] = React.useState(defaultCopy);

  const applyFormat = () => {
    if (formatRef.current) {
      const format = formatRef.current.value;
      if (format === '') {
        setCopy(defaultCopy);
        return;
      }
      console.log(format);

      setCopy(
        formats.filter((f) => f.name === format)[0].method(form, other, damage),
      );
    }
  };

  return (
    <>
      <div className='w-full px-12'>
        <div className='mx-auto mb-8 flex w-11/12 flex-row justify-end'>
          <FormatSelect refObj={formatRef} />
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
