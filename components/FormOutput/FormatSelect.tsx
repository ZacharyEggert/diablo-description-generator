import React from 'react';
import formats from './formats';

interface FormatSelectProps {
    refObj: React.RefObject<HTMLSelectElement>;
}

const FormatSelect: React.FC<FormatSelectProps> = ({refObj}) => {
    return (
        <select ref={refObj} className='w-48 text-xl'>
            <option value="" className='bg-gray-800'>Select...</option>
            {formats.map((format) => (
                <option key={format.name} value={format.name} className='bg-gray-800'>
                    {format.name}
                </option>
            ))}
        </select>
    );
};

export default FormatSelect;
