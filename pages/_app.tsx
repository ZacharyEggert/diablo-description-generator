import { useEffect, useState } from 'react';
import { useDebounce } from 'lib/hooks';
import {
    defaultContext,
    emptyContext,
    FormContext,
    IFormContext,
    OtherContext,
} from 'lib/context';
import 'styles/global.css';

function MyApp({ Component, pageProps }) {
    const [formState, setFormState] = useState(defaultContext);
    const [otherState, setOtherState] = useState(emptyContext);

    const alterForm = (Object: Partial<IFormContext>) => {
        setFormState((oldState) => ({ ...oldState, ...Object }));
    };
    const alterOther = (Object: Partial<IFormContext>) => {
        setOtherState((oldState) => ({ ...oldState, ...Object }));
    };

    const debouncedForm = useDebounce(formState, 6000);
    const debouncedOther = useDebounce(otherState, 6000);

    useEffect(() => {
        const formStateImport = localStorage.getItem('formState');
        const otherStateImport = localStorage.getItem('otherState');

        console.debug('app load triggered: reading from local storage');

        if (formStateImport) {
            alterForm(JSON.parse(formStateImport));
        }
        if (otherStateImport) {
            alterOther(JSON.parse(otherStateImport));
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('formState', JSON.stringify(debouncedForm));
            localStorage.setItem('otherState', JSON.stringify(debouncedOther));
            console.debug('debounce triggered: writing to local storage');
        }, 1000);
    }, [debouncedForm, debouncedOther]);

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
