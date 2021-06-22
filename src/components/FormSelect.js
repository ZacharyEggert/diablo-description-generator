import { useContext } from "react";
import { FormContext } from "./Form";



const FormSelect = (props) => {

    const {formData, formOptions, formOther, handleFormChange} = useContext(FormContext)

return (
    <div>
        <label htmlFor={props.name} name='hello'>
            {(props.name).toUpperCase()}: 
            {formOptions[props.name].length>0?(
                <select name={props.name} value={formData[props.name] || 'select...'} onChange={handleFormChange}>
                    <option>select...</option>
                    {formOptions[props.name].map(option => (<option key={option+'opt'}>{option}</option>))}
                    <option>Other</option>
                </select>
            ) : (
                <input name={props.name} value={formData[props.name] || ''} onChange={handleFormChange} />
            )}
            {formData[props.name] === 'Other' ? (
                <input name={`other.${props.name}`} value={formOther[props.name]} onChange={handleFormChange}/>
            ) : null}
            
        </label>
    </div>
)
}


export default FormSelect;