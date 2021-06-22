import React, {useContext} from 'react';
import { FormContext } from './Form';

const Output = (props) => {

    const {formData, formDataPrettier, formOther} = useContext(FormContext)

    const {
        make,
        model,
        year,
        finish,
        countryOfOrigin,
        serial,
        condition,
        weight,
        bodyType,
        bodyWood,
        scaleLength,
        neckJoint,
        neckWood,
        neckFinish,
        fingerBoard,
        radius,
        neckProfile,
        inlays,
        nutWidth,
        nut,
        frets,
        pickups,
        pickupConfiguration,
        pickguard,
        controls,
        switches,
        hardware,
        tuningMachines,
        bridge,
        knobs,
        modifications,
        otherFeatures,
        stringGuage,
        guitarCase
    } = formData;

return(
    <div className={`${props.className} font-bold`}>
        <p className='mb-8'>
        {make || 'MAKE'} {model || 'MODEL'} in {finish || 'FINISH'} finish made in {year || 'YEAR'}{guitarCase?` with ${guitarCase || 'CASE'}`:null}. 
        <br/>
        <br/>
        This guitar features a {bodyType || 'BODYTYPE'} {bodyWood || 'BODYWOOD'} Body, {neckWood || 'NECKWOOD'} neck and {fingerBoard || 'FINGERBOARD'} Fingerboard. Equipped with {pickups || 'PICKUPS'}. Controlled by {knobs || 'KNOBS'} knobs and {switches || 'SWITCH'}. The {scaleLength || 'SCALELENGTH'} scale length neck has {inlays?`${inlays || 'INLAYS'} inlays and `:null}{frets || 'FRETS'} frets with a {neckProfile || 'NECKPROFILE'} neck profile. The hardware is comprised of {tuningMachines || 'TUNINGMACHINES'}, a {nut || 'NUT'} Nut,{!hardware?` and`:null} a {bridge || 'BRIDGE'} bridge{hardware?` with ${hardware || 'HARDWARE'}`:null}{pickguard?` on a ${pickguard || 'PICKGUARD'} pickguard`:null}.
        
        
        <br />
        <br />
        [FLAVORTEXT]
        <br />
        <br />
        Guitar is freshly setup and restrung with {stringGuage || 'GUAGE'} strings{guitarCase?` and includes ${guitarCase || 'CASE'} case`:null}.
        </p>
        <ul className='list-disc'>
            {Object.keys(formData).map(data => {if(formData[data]){return(<li className=''  key={'li'+data}>{formDataPrettier[data] || data}: {formOther[data] || formData[data]}</li>)}else{return null}})}
        </ul>
    </div>    
)
}

export default Output