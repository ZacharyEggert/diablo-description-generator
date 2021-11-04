import React from "react";

interface Props {
    label: string;
    options: string[];
    
}

const FormSelect:React.FC<Props> = ({label, options}) => {

    return (
        <label className='inline-block w-1/5 mx-4 px-4 py-2 bg-gray-700'>
            <span className='w-1/3 inline-block'>{label}</span>
            <input type="text" className='bg-gray-900 w-2/3'/>
        </label>
    )
}

export default FormSelect;