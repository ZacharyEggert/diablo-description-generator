import React, { useContext } from "react";
import { FormContext } from "./Form"


const List = (props) => {

    const {formData, formDataPrettier, formOther} = useContext(FormContext)
    
    return (
        <ul className='list-disc'>
            {Object.keys(formData).map(data => {if(formData[data]){return(<li className=''  key={'li'+data}>{formDataPrettier[data] || data}: {formOther[data] || formData[data]}{data==='scaleLength'||data==='nutWidth'?`"`:null}</li>)}else{return null}})}
        </ul>
    )
}

export default List;