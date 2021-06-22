import React, {useContext} from 'react';
import { FormContext } from './Form';

const Output = (props) => {

    const {formData, formDataPrettier, formOther} = useContext(FormContext)


return(
    <div className={props.className}>
        <p>

        </p>

        <p>

        </p>
        <ul>
            {Object.keys(formData).map(data => {if(formData[data]){return(<li key={'li'+data}>{formDataPrettier[data] || data}: {formOther[data] || formData[data]}</li>)}else{return null}})}
        </ul>
    </div>    
)
}

export default Output