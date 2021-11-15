import { createContext, useContext } from "react";

export interface IFormContext {
    make:string;
    model:string;
    subModel:string;
    year: string;
    finish: string;
    countryOfOrigin: string;
    serial: string;
    condition: string;
    weight: string;
    bodyType: string;
    bodyWood:string;
    scaleLength:string;
    neckJoint:string;
    neckWood:string;
    neckFinish:string;
    fingerBoard:string;
    radius:string;
    neckProfile:string;
    inlays:string;
    nutWidth:string;
    nut:string;
    frets:string;
    pickups:string;
    pickupConfiguration:string;
    pickguard:string;
    controls:string;
    switches:string;
    hardware:string;
    tuningMachines:string;
    bridge:string;
    knobs:string;
    modifications:string;
    otherFeatures:string;
    stringGauge:string;
    guitarCase:string;
}

export const defaultContext:IFormContext = {
    make: "sel",
    model: "sel",
    subModel: "sel",
    year: "sel",
    finish: "sel",
    countryOfOrigin: "sel",
    serial: "sel",
    condition: "sel",
    weight: "sel",
    bodyType: "sel",
    bodyWood: "sel",
    scaleLength: "sel",
    neckJoint: "sel",
    neckWood: "sel",
    neckFinish: "sel",
    fingerBoard: "sel",
    radius: "sel",
    neckProfile: "sel",
    inlays: "sel",
    nutWidth: "sel",
    nut: "sel",
    frets: "sel",
    pickups: "sel",
    pickupConfiguration: "sel",
    pickguard: "sel",
    controls: "sel",
    switches: "sel",
    hardware: "sel",
    tuningMachines: "sel",
    bridge: "sel",
    knobs: "sel",
    modifications: "sel",
    otherFeatures: "sel",
    stringGauge: "sel",
    guitarCase: "sel",
}

export const emptyContext:IFormContext = {
    make: "",
    model: "",
    subModel: "",
    year: "",
    finish: "",
    countryOfOrigin: "",
    serial: "",
    condition: "",
    weight: "",
    bodyType: "",
    bodyWood: "",
    scaleLength: "",
    neckJoint: "",
    neckWood: "",
    neckFinish: "",
    fingerBoard: "",
    radius: "",
    neckProfile: "",
    inlays: "",
    nutWidth: "",
    nut: "",
    frets: "",
    pickups: "",
    pickupConfiguration: "",
    pickguard: "",
    controls: "",
    switches: "",
    hardware: "",
    tuningMachines: "",
    bridge: "",
    knobs: "",
    modifications: "",
    otherFeatures: "",
    stringGauge: "",
    guitarCase: "",
}

export const FormContext = createContext<IFormContext>(defaultContext);
export const UseFormContext = () => useContext(FormContext);

export const OtherContext = createContext<IFormContext>(emptyContext);
export const UseOtherContext = () => useContext(OtherContext);