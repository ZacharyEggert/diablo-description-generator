import React from 'react';
import { SVP } from '../../lib/types';
import formPresets from './formPresets';

interface Props { alterForm: (Object: SVP) => void }
const Presets: React.FC<Props> = ({
    alterForm,
}) => {



    return (
        <div className='py-4 text-white bg-gray-900'>
            <h3 className='inline mx-12 text-2xl font-bold'>Presets</h3>
            <select className='mx-4 bg-gray-800 w-72'>
                {Object.values(formPresets).map((preset, i) => (
                    <option key={i} value={preset.name} className='bg-gray-800'>
                        {preset.name}
                    </option>
                ))}
            </select>
            <button className='mx-4'>Apply</button>
            <button className='float-right mx-4'>Make Preset</button>
        </div>
    );
};

export default Presets;
