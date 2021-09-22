import React, { createContext, useState } from "react";
import FormSelect from "./FormSelect";
import Output from "./Output";

const Form = () => {
    const formOptions = {
        make: [
            "Fender",
            "Gibson",
            "Jackson",
            "PRS",
            "Washburn",
            "ESP",
            "Gretch",
            "G&L",
            "Knaggs",
            "Ibanez",
            "Epiphone",
            "Schecter",
            "Caparison",
        ],
        model: [],
        year: [],
        finish: [],
        countryOfOrigin: ["USA", "Mexico", "Japan"],
        serial: [],
        condition: ["Mint", "Excellent", "Very Good", "Good"],
        weight: [],
        bodyType: ["Solid", "Semi-Hollow", "Hollow"],
        bodyWood: [
            "Alder",
            "Ash",
            "Mahogany",
            "Korina",
            "Poplar",
            "Maple",
            "Rosewood",
            "Koa",
            "Basswood",
            "Walnut",
        ],
        scaleLength: [25.5, 24.75, 24, 24.5, 25, 26.5, 27],
        neckJoint: ["Bolt-on", "Set Neck", "Neck-through"],
        neckWood: [
            "Maple",
            "Koa",
            "Rosewood",
            "Mahogany",
            "Wenge",
            "Walnut",
            "Korina",
            "Purpleheart",
        ],
        neckFinish: [],
        fingerBoard: [
            "Maple",
            "Rosewood",
            "Ebony",
            "Pau Ferro",
            "Laurel",
            "Wenge",
            "Walnut",
            "Blackwood",
        ],
        radius: [7.25, 9.5, 10, 12, 14, 15, 16, 20, "Flat"],
        neckProfile: [
            "Modern C",
            "Chunky C",
            "C",
            "D",
            "V",
            "U",
            "Hard V",
            "BB",
            "Asymmetrical",
            "Pattern",
        ],
        inlays: [
            "Pearloid Dot",
            "Abalone Dot",
            "Black Dot",
            "White Dot",
            "Pearloid Trapezoid",
            "Abalone Trapezoid",
            "Sharkfin",
            "Reverse Sharkfin",
            "Pearloid Rectangle",
            "Abalone Rectangle",
        ],
        nutWidth: [
            1.6875, 1.685, 1.656, 1.6, 1.65, 1.625, 1.575, 1.687, 1.69, 1.66,
            1.695,
        ].sort((a, b) => a - b),
        nut: [
            "Bone",
            "Fossil Ivory",
            "Plastic",
            "Graphite",
            "Ebony",
            "Synthetic Bone",
            "Tektoid",
            "Floyd Locking",
            "Kahler Locking",
            "Fender LSR Roller Nut",
        ],
        frets: [
            "22 Medium Jumbo",
            "21 Medium Jumbo",
            "22 Medium",
            "21 Medium",
            "22 Medium Tall",
            "21 Medium Tall",
            "22 Jumbo",
            "21 Jumbo",
        ],
        pickups: [],
        pickupConfiguration: [
            "HH",
            "HHH",
            "H",
            "SSS",
            "HSS",
            "HSH",
            "SS",
            "HS",
            "S",
        ],
        pickguard: [
            "3-Ply White-Black-White",
            "3-Ply Black-White-Black",
            "Single-Ply Black",
            "Single-Ply White",
            "Mirror",
        ],
        controls: [
            "1-Volume, 2-Tone",
            "1-Volume, 1-Tone",
            "2-Volume, 2-Tone",
            "2-Volume, 1-Tone",
            "One Master Volume",
        ],
        switches: ["3-Way Toggle Switch", "5-Way Blade Switch"],
        hardware: ["Nickel", "Black", "Gold", "Aged Nickel", "Aged Gold"],
        tuningMachines: [],
        bridge: [],
        knobs: [
            "Black Top Hat",
            "White Top Hat",
            "Cream Top Hat",
            "Amber Top Hat",
            "Gold Top Hat",
            "Black Speed",
            "White Speed",
            "Amber Speed",
            "Gold Speed",
            "Knurled Chrome Dome",
            "Knurled Chrome",
            "Knurled Gold Dome",
            "Knurled Gold",
        ],
        modifications: [],
        otherFeatures: ["Certificate of Authenticity"],
        stringGauge: ["10-46", "9-42"],
        guitarCase: ["Original Hard Shell Case"],
    };
    const formDataPrettier = {
        make: "Make",
        model: "Model",
        year: "Year",
        finish: "Finish",
        countryOfOrigin: "Country of Origin",
        serial: "Serial #",
        condition: "Condition",
        weight: "Weight",
        bodyType: "Body Type",
        bodyWood: "Body Wood",
        scaleLength: "Scale Length",
        neckJoint: "Neck Joint",
        neckWood: "Neck Wood",
        neckFinish: "Neck Finish",
        fingerBoard: "Finger Board",
        radius: "Neck Radius",
        neckProfile: "Neck Profile",
        inlays: "Inlays",
        nutWidth: "Nut Width",
        nut: "Nut",
        frets: "Frets",
        pickups: "Pickups",
        pickupConfiguration: "Pickup Configuration",
        pickguard: "Pickguard",
        controls: "Controls",
        switches: "Switch",
        hardware: "Hardware",
        tuningMachines: "Tuning Machines",
        bridge: "Bridge",
        knobs: "Knobs",
        modifications: "Modifications",
        otherFeatures: "Other Features",
        stringGauge: "String Guage",
        guitarCase: "Case",
    };
    const [formOther, setFormOther] = useState({
        make: "",
        model: "",
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
    });
    const [formData, setFormData] = useState({
        make: "",
        model: "",
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
    });

    const handleFormChange = (e) => {
        const register = e.target.name;
        const value = e.target.value;
        if (register.match("other.") && !register.match("otherFeatures")) {
            const registerOther = register.split(".")[1];
            // console.log('setting formOther')
            setFormOther({ ...formOther, [registerOther]: value });
            // console.log(formOther)
        } else {
            // console.log('setting formData')
            setFormData({ ...formData, [register]: value });
            // console.log(formData)
        }
    };

    return (
        <FormContext.Provider
            value={{
                formData,
                formDataPrettier,
                formOptions,
                formOther,
                setFormData,
                setFormOther,
                handleFormChange,
            }}
        >
            <div className="flex flex-col w-full min-h-screen px-12 pt-12 text-white bg-black bg-opacity-90">
                <form
                    className="flex flex-row flex-wrap justify-between flex-1 pb-8 mx-auto md:w-11/12"
                    onSubmit={(e) => e.preventDefault()}
                >
                    {Object.keys(formData).map((d) => (
                        <FormSelect name={d} key={d} />
                    ))}
                </form>
                <Output className="flex-1 w-9/12 mx-auto" />
            </div>
        </FormContext.Provider>
    );
};

const FormContext = createContext({
    formData: {},
    formOptions: {},
    setFormData: () => {},
    handleFormChange: () => {},
});

export { FormContext };

export default Form;
