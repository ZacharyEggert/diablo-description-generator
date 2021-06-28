import React, { useContext } from "react";
import { FormContext } from "./Form";

const insertSpacer = () => {
    return (
        <>
        
        <br />
        <br />
        [FLAVORTEXT]
        <br />
        <br />
        
        </>
    )
}


const Description1 = (props) => {

    const {formData, formOther} = useContext(FormContext)

    let formDataCopy = {...formData}
    Object.keys(formDataCopy).forEach(label => {
        if(formData[label] === 'Other'){
            formDataCopy[label] = formOther[label]
        }
    })

    let {
        make,
        model,
        year,
        finish,
        bodyType,
        bodyWood,
        scaleLength,
        neckWood,
        fingerBoard,
        neckProfile,
        inlays,
        nut,
        frets,
        pickups,
        pickguard,
        controls,
        switches,
        hardware,
        tuningMachines,
        bridge,
        knobs,
        stringGuage,
        guitarCase
    } = formDataCopy;


    return (
        <p className='mb-8'>
        {make || 'MAKE'} {model || 'MODEL'} in {finish || 'FINISH'} finish made in {year || 'YEAR'}{guitarCase?` with ${guitarCase || 'CASE'}`:null}. 
        <br/>
        <br/>
        This guitar features a {bodyType || 'BODYTYPE'} {bodyWood || 'BODYWOOD'} Body, {/**neckFinish?`${neckFinish || 'NECKFINISH'} `:null*/}{neckWood || 'NECKWOOD'} neck and {neckWood.toUpperCase() !== fingerBoard.toUpperCase() ? `${fingerBoard || 'FINGERBOARD'} `:null}fingerboard. Equipped with {pickups || 'PICKUPS'}. Controlled by {controls || 'CONTROLS'} knobs and {switches || 'SWITCH'}. The {scaleLength || 'SCALELENGTH'}" scale length neck has {inlays?`${inlays || 'INLAYS'} inlays and `:null}{frets || 'FRETS'} frets with a {neckProfile || 'NECKPROFILE'} neck profile. The hardware is comprised of {(tuningMachines || 'TUNINGMACHINES') + ' tuning machines, '}a {nut || 'NUT'} Nut,{!hardware?` and`:null} a {bridge || 'BRIDGE'}{bridge.match('bridge')||bridge.match('Bridge') ? null : ` bridge`},{knobs?` with ${(knobs || 'KNOBS') + ' Knobs'}`:null}{pickguard?` on a ${pickguard || 'PICKGUARD'} pickguard`:null}.
        
        {insertSpacer()}

        Guitar is freshly setup and restrung with {stringGuage || 'GUAGE'} strings{guitarCase?` and includes ${guitarCase || 'CASE'} case`:null}.
        </p>
    )
}

const Description2 = (props) => {

    const {formData, formOther} = useContext(FormContext)

    let formDataCopy = {...formData}
    Object.keys(formDataCopy).forEach(label => {
        if(formData[label] === 'Other'){
            formDataCopy[label] = formOther[label]
        }
    })

    let {
        make,
        model,
        year,
        finish,
        bodyType,
        bodyWood,
        scaleLength,
        neckWood,
        fingerBoard,
        neckProfile,
        inlays,
        nut,
        frets,
        pickups,
        pickguard,
        controls,
        switches,
        hardware,
        tuningMachines,
        bridge,
        knobs,
        stringGuage,
        guitarCase
    } = formDataCopy;

    return (
        <p className='mb-8'>
        {make || 'MAKE'} {model || 'MODEL'} in {finish || 'FINISH'} finish made in {year || 'YEAR'}{guitarCase?` with ${guitarCase || 'CASE'}`:null}. 
        <br/>
        <br/>
        This guitar features a {bodyType || 'BODYTYPE'} {bodyWood || 'BODYWOOD'} Body, {/**neckFinish?`${neckFinish || 'NECKFINISH'} `:null*/}{neckWood || 'NECKWOOD'} neck and {neckWood.toUpperCase() !== fingerBoard.toUpperCase() ? `${fingerBoard || 'FINGERBOARD'} `:null}fingerboard. Equipped with {pickups || 'PICKUPS'}. Controlled by {controls || 'CONTROLS'} knobs and {switches || 'SWITCH'}. The {scaleLength || 'SCALELENGTH'}" scale length neck has {inlays?`${inlays || 'INLAYS'} inlays and `:null}{frets || 'FRETS'} frets with a {neckProfile || 'NECKPROFILE'} neck profile. The hardware is comprised of {(tuningMachines || 'TUNINGMACHINES') + ' tuning machines, '}a {nut || 'NUT'} Nut,{!hardware?` and`:null} a {bridge || 'BRIDGE'}{bridge.match('bridge')||bridge.match('Bridge') ? null : ` bridge`},{knobs?` with ${(knobs || 'KNOBS') + ' Knobs'}`:null}{pickguard?` on a ${pickguard || 'PICKGUARD'} pickguard`:null}.
        
        {insertSpacer()}
        
        Guitar is freshly setup and restrung with {stringGuage || 'GUAGE'} strings{guitarCase?` and includes ${guitarCase || 'CASE'} case`:null}.
        </p>
    )
}



export {Description1, Description2}