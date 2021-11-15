import { useState } from 'react';
import {
    defaultContext,
    FormContext,
    IFormContext,
    OtherContext,
} from '../lib/context';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    const [formState, setFormState] = useState(defaultContext);
    const [otherState, setOtherState] = useState(defaultContext);

    const alterForm = (Object: Partial<IFormContext>) => {
        setFormState((oldState) => ({ ...oldState, ...Object }));
    };
    const alterOther = (Object: Partial<IFormContext>) => {
        setOtherState((oldState) => ({ ...oldState, ...Object }));
    };

    return (
        <FormContext.Provider value={formState}>
            <OtherContext.Provider value={otherState}>
                <Component
                    {...pageProps}
                    alterForm={alterForm}
                    alterOther={alterOther}
                />
            </OtherContext.Provider>
        </FormContext.Provider>
    );
}

export default MyApp;
