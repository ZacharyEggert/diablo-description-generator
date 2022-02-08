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
import { IDamageAreas, IDamageContext } from 'lib/types';
import { DamageContext, defaultDamageContext } from 'lib/damageContext';

function MyApp({ Component, pageProps }) {
  const [formState, setFormState] = useState(defaultContext);
  const [otherState, setOtherState] = useState(emptyContext);
  const [damageState, setDamageState] = useState(defaultDamageContext);

  const alterForm = (Object: Partial<IFormContext>) => {
    setFormState((oldState) => ({ ...oldState, ...Object }));
  };
  const alterOther = (Object: Partial<IFormContext>) => {
    setOtherState((oldState) => ({ ...oldState, ...Object }));
  };
  const alterDamage = (Object: {
    rating?: Partial<IDamageAreas>;
    description?: Partial<IDamageAreas>;
  }) => {
    setDamageState((oldState) => ({
      rating: { ...oldState.rating, ...Object.rating },
      description: { ...oldState.description, ...Object.description },
    }));
  };

  const debouncedForm = useDebounce(formState, 6000);
  const debouncedOther = useDebounce(otherState, 6000);
  const debouncedDamage = useDebounce(damageState, 6000);

  useEffect(() => {
    const formStateImport = localStorage.getItem('formState');
    const otherStateImport = localStorage.getItem('otherState');
    const damageStateImport = localStorage.getItem('damageState');

    console.debug('app load triggered: reading from local storage');

    if (formStateImport) {
      alterForm(JSON.parse(formStateImport));
    }
    if (otherStateImport) {
      alterOther(JSON.parse(otherStateImport));
    }
    if (damageStateImport) {
      alterDamage(JSON.parse(damageStateImport));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('formState', JSON.stringify(debouncedForm));
      localStorage.setItem('otherState', JSON.stringify(debouncedOther));
      localStorage.setItem('damageState', JSON.stringify(debouncedDamage));
      console.debug('debounce triggered: writing to local storage');
    }, 1000);
  }, [debouncedForm, debouncedOther, debouncedDamage]);

  return (
    <FormContext.Provider value={formState}>
      <OtherContext.Provider value={otherState}>
        <DamageContext.Provider value={damageState}>
          <Component
            {...pageProps}
            alterForm={alterForm}
            alterOther={alterOther}
            alterDamage={alterDamage}
          />
        </DamageContext.Provider>
      </OtherContext.Provider>
    </FormContext.Provider>
  );
}

export default MyApp;
