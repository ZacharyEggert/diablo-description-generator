import React, { createContext, useState } from 'react';
import FormSelect from './FormSelect';
import Output from './Output';

const Form = () => {
    const formOptions = {
        make:['Fender', 'Gibson', 'Jackson'],
        model:[],
        year:[],
        finish:[],
        countryOfOrigin:['the USA', 'Mexico', 'Japan'],
        serial:[],
        condition:['Mint', 'Excellent', 'Very Good', 'Good'],
        weight:[],
        bodyType:['Solid', 'Semi-Hollow', 'Hollow'],
        bodyWood:['Alder', 'Ash', 'Basswood', 'Mahogany', 'Maple', 'Korina'],
        scaleLength:[25.5, 24.75, 24, 24.5, 25, 26.5, 27 ],
        neckJoint:['Set neck', 'Bolt-on', 'Neck-through'],
        neckWood:['Alder', 'Ash', 'Basswood', 'Mahogany', 'Maple', 'Korina', 'Rosewood'],
        neckFinish:[],
        fingerBoard:['Rosewood', 'Ebony', 'Maple', 'Pau Ferro', 'Richlite'],
        radius:[7.25, 9.5, 10, 11.5, 12, 14, 15, 16, 20, 24, 'Flat'],
        neckProfile:['C', 'Chunky C', 'D', 'V', 'U', 'Hard V', 'BB', 'Asymmetrical'],
        inlays:[],
        nutWidth:['1.745', '1.6875' ],
        nut:['Synthetic Bone', 'Composite Bone', 'Tektoid'],
        frets:[],
        pickups:[],
        pickupConfiguration:[],
        pickguard:[],
        controls:[],
        switch:[],
        hardware:[],
        tuningMachines:[],
        bridge:[],
        knobs:[],
        modifications:[],
        otherFeatures:[],
        stringGuage:['10-46', '9-42'],
        case:[],
    }
    const formDataPrettier = {
        make:'Make',
        model:'Model',
        year:'Year',
        finish:'Finish',
        countryOfOrigin:'Country of Origin',
        serial:'Serial #',
        condition:'Condition',
        weight:'Weight',
        bodyType:'Body Type',
        bodyWood:'Body Wood',
        scaleLength:'Scale Length',
        neckJoint:'Neck Joint',
        neckWood:'Neck Wood',
        neckFinish:'Neck Finish',
        fingerBoard:'Finger Board',
        radius:'Neck Radius',
        neckProfile:'Neck Profile',
        inlays:'Inlays',
        nutWidth:'Nut Width',
        nut:'Nut',
        frets:'Frets',
        pickups:'Pickups',
        pickupConfiguration:'Pickup Configuration',
        pickguard:'Pickguard',
        controls:'Controls',
        switch:'Switch',
        hardware:'Hardware',
        tuningMachines:'Tuning Machines',
        bridge:'Bridge',
        knobs:'Knobs',
        modifications:'Modifications',
        otherFeatures:'Other Features',
        stringGuage:'String Guage',
        case:'Case'
    }
    const [formOther, setFormOther] = useState({
        make:'',
        model:'',
        year:'',
        finish:'',
        countryOfOrigin:'',
        serial:'',
        condition:'',
        weight:'',
        bodyType:'',
        bodyWood:'',
        scaleLength:'',
        neckJoint:'',
        neckWood:'',
        neckFinish:'',
        fingerBoard:'',
        radius:'',
        neckProfile:'',
        inlays:'',
        nutWidth:'',
        nut:'',
        frets:'',
        pickups:'',
        pickupConfiguration:'',
        pickguard:'',
        controls:'',
        switch:'',
        hardware:'',
        tuningMachines:'',
        bridge:'',
        knobs:'',
        modifications:'',
        otherFeatures:'',
        stringGuage:'',
        case:''
    })
    const [formData, setFormData] = useState({
        make:'',
        model:'',
        year:'',
        finish:'',
        countryOfOrigin:'',
        serial:'',
        condition:'',
        weight:'',
        bodyType:'',
        bodyWood:'',
        scaleLength:'',
        neckJoint:'',
        neckWood:'',
        neckFinish:'',
        fingerBoard:'',
        radius:'',
        neckProfile:'',
        inlays:'',
        nutWidth:'',
        nut:'',
        frets:'',
        pickups:'',
        pickupConfiguration:'',
        pickguard:'',
        controls:'',
        switch:'',
        hardware:'',
        tuningMachines:'',
        bridge:'',
        knobs:'',
        modifications:'',
        otherFeatures:'',
        stringGuage:'',
        case:''
    })

    const handleFormChange = (e) => {
        const register = e.target.name;
        const value = e.target.value;
        if(register.match('other.')){
            const registerOther = register.split('.')[1];
            // console.log('setting formOther')
            setFormOther({...formOther, [registerOther]:value});
            // console.log(formOther)
        }else{
            // console.log('setting formData')
            setFormData({...formData, [register]:value});
            // console.log(formData)
        }
    }

return(
    <FormContext.Provider value={{formData, formDataPrettier, formOptions, formOther, setFormData, setFormOther, handleFormChange}}>
    <form onSubmit={e => e.preventDefault()}>
        
        {Object.keys(formData).map(d => (<FormSelect name={d} key={d}/>))}
        
    </form>
    <Output />
    </FormContext.Provider>
);
}

const FormContext = createContext({
    formData: {},
    formOptions: {},
    setFormData:()=>{},
    handleFormChange: () => {}
})

export {FormContext};

export default Form;