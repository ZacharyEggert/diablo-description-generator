export type IFormContext = {
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
    pickupConfiguration:string;
    pickupNeck:string;
    pickupMiddle:string;
    pickupBridge:string;
    pickguard:string;
    pots:string;
    coilTap:string;
    pickupSwitch:string;
    phaseSwitch:string;
    killSwitch:string;
    hardware:string;
    tuningMachines:string;
    bridge:string;
    knobs:string;
    modifications:string;
    otherFeatures:string;
    stringGauge:string;
    guitarCase:string;
}

export type IOtherContext = IFormContext & {
    lockingTuners:boolean;
}