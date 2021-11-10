import { useState } from 'react';
import { defaultContext, FormContext, IFormContext } from '../lib/context';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    const [formState, setFormState] = useState(defaultContext);

    const alterForm = (Object: Partial<IFormContext>) => {
        setFormState((oldState) => ({ ...oldState, ...Object }));
    };

    return (
        <FormContext.Provider value={formState}>
            <Component {...pageProps} alterForm={alterForm} />
        </FormContext.Provider>
    );
}

export default MyApp;
