import { IFormContext } from '../../lib/context';

const formats = [
    {
        name: 'Hilding (Dry)',
        method: (state: IFormContext) => {
            return <h1>{state.make} {state.model} {state.subModel} {state.year} {state.finish} {state.countryOfOrigin} {state.serial}</h1>;
        },
    },
];

export default formats;
