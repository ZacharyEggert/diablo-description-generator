import React, {useState} from 'react';
import List from './List'
import Description from './Description'

const Output = (props) => {

    const [template, setTemplate] = useState(1)

    const templateHandler = (event) => {
        setTemplate(event.target.value)
        console.log(`template set to ${event.target.value}`)
    }

return(
    <div className={`${props.className}`}>
    <div>
        <label>
            Template:
        <select onChange={templateHandler} value={template} className='ml-4 bg-black'>
            <option value='1'>HILDING</option>
            <option value='2'>2</option>
        </select>
        </label>
    </div>
    <br/>
    <div className={`font-bold`}>
        <Description number={template} />
        <List />
    </div>    
    </div>
)
}

export default Output