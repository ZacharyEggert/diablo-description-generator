import { useContext } from "react";
import { FormContext } from "./Form";



const FormSelect = (props) => {

    const {formData, formOptions, formOther, handleFormChange} = useContext(FormContext)

return (
    <div>
        <label htmlFor={props.name} name='hello'>
            <span className='w-[12rem] inline-block font-bold'>{(props.name).toUpperCase()}:</span> 
            {formOptions[props.name].length>0?(
                <select className='mb-2 w-[12rem] bg-black text-white' name={props.name} value={formData[props.name] || 'select...'} onChange={handleFormChange}>
                    <option value=''>select...</option>
                    {formOptions[props.name].map(option => (<option key={option+'opt'}>{option}</option>))}
                    <option >Other</option>
                </select>
            ) : (
                <input placeholder={props.name.toUpperCase()} className='px-1 border-black border-solid border-[1px] my-[1px] bg-black bg-opacity-90 text-white' name={props.name} value={formData[props.name] || ''} onChange={handleFormChange} />
            )}
            
        </label>
            {formData[props.name] === 'Other' ? (
                <input placeholder={props.name.toUpperCase()} className='px-1 ml-[12rem] border-black border-solid border-[1px] my-[1px]' name={`other.${props.name}`} value={formOther[props.name]} onChange={handleFormChange}/>
                ) : null}
            
    </div>
)
}


export default FormSelect;