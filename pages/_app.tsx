import { useState } from 'react';
import { defaultContext, FormContext } from '../lib/context';
import { SVP } from '../lib/types';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {

    const [formState, setFormState] = useState(defaultContext);

    const alterForm = (Object: SVP) => {
        setFormState(oldState => ({...oldState, ...Object}));
    }

    return (
        <FormContext.Provider value={formState}>
            <Component {...pageProps} alterForm={alterForm}/>
        </FormContext.Provider>
    );
}

export default MyApp;
