import React from "react";
import { Description1, Description2 } from "./Descriptions";

const Description = (props) => {

    const {number} = props;

    const renderSwitch = () => {
        switch(number){
            case '1':
            return (
                <Description1 {...props}/>
            )
            case '2':
            return (
                <Description2 {...props} />
            )
            default: 
            return (
                <Description1 {...props}/>
            )
        }
    }

    return (
        <>
        { renderSwitch() }
        
        </>
    )
}

export default Description