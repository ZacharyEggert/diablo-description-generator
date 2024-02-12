import 'styles/global.css';

import {
  AcousticDamageContext,
  defaultAcousticDamageContext,
} from 'lib/damageContext';
import {
  AcousticFormContext,
  AcousticOtherContext,
  defaultAcousticContext,
  emptyAcousticContext,
} from 'lib/acousticContext';
import { AmpDamageContext, defaultAmpDamageContext } from 'lib/damageContext';
import {
  AmpFormContext,
  AmpOtherContext,
  defaultAmpContext,
  emptyAmpContext,
} from 'lib/ampContext';
import { DamageContext, defaultDamageContext } from 'lib/damageContext';
import {
  FormContext,
  IFormContext,
  OtherContext,
  defaultContext,
  emptyContext,
} from 'lib/context';
import {
  IAcousticDamageAreas,
  IAcousticFormContext,
  IAmpDamageAreas,
  IAmpFormContext,
  IDamageAreas,
} from 'lib/types';
import { useEffect, useState } from 'react';

import { useDebounce } from 'lib/hooks';

function MyApp({ Component, pageProps }) {
  const [formState, setFormState] = useState(defaultContext);
  const [otherState, setOtherState] = useState(emptyContext);
  const [damageState, setDamageState] = useState(defaultDamageContext);

  const [acousticFormState, setAcousticFormState] = useState(
    defaultAcousticContext,
  );
  const [acousticOtherState, setAcousticOtherState] =
    useState(emptyAcousticContext);
  const [acousticDamageState, setAcousticDamageState] = useState(
    defaultAcousticDamageContext,
  );

  const [ampFormState, setAmpFormState] = useState(defaultAmpContext);
  const [ampOtherState, setAmpOtherState] = useState(emptyAmpContext);
  const [ampDamageState, setAmpDamageState] = useState(defaultAmpDamageContext);

  const [itemType, setItemType] = useState<'guitar' | 'amplifier' | 'acoustic'>(
    'amplifier',
  );

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

  const alterAcousticForm = (Object: Partial<IAcousticFormContext>) => {
    setAcousticFormState((oldState) => ({ ...oldState, ...Object }));
  };
  const alterAcousticOther = (Object: Partial<IAcousticFormContext>) => {
    setAcousticOtherState((oldState) => ({ ...oldState, ...Object }));
  };
  const alterAcousticDamage = (Object: {
    rating?: Partial<IAcousticDamageAreas>;
    description?: Partial<IAcousticDamageAreas>;
  }) => {
    setAcousticDamageState((oldState) => ({
      rating: { ...oldState.rating, ...Object.rating },
      description: { ...oldState.description, ...Object.description },
    }));
  };

  const alterAmpForm = (Object: Partial<IAmpFormContext>) => {
    setAmpFormState((oldState) => ({ ...oldState, ...Object }));
  };
  const alterAmpOther = (Object: Partial<IAmpFormContext>) => {
    setAmpOtherState((oldState) => ({ ...oldState, ...Object }));
  };
  const alterAmpDamage = (Object: {
    rating?: Partial<IAmpDamageAreas>;
    description?: Partial<IAmpDamageAreas>;
  }) => {
    setAmpDamageState((oldState) => ({
      rating: { ...oldState.rating, ...Object.rating },
      description: { ...oldState.description, ...Object.description },
    }));
  };

  const debouncedForm = useDebounce(formState, 6000);
  const debouncedOther = useDebounce(otherState, 6000);
  const debouncedDamage = useDebounce(damageState, 6000);

  const debouncedAcousticForm = useDebounce(acousticFormState, 6000);
  const debouncedAcousticOther = useDebounce(acousticOtherState, 6000);
  const debouncedAcousticDamage = useDebounce(acousticDamageState, 6000);

  const debouncedAmpForm = useDebounce(ampFormState, 6000);
  const debouncedAmpOther = useDebounce(ampOtherState, 6000);
  const debouncedAmpDamage = useDebounce(ampDamageState, 6000);

  useEffect(() => {
    const formStateImport = localStorage.getItem('formState');
    const otherStateImport = localStorage.getItem('otherState');
    const damageStateImport = localStorage.getItem('damageState');

    const acousticFormStateImport = localStorage.getItem('acousticFormState');
    const acousticOtherStateImport = localStorage.getItem('acousticOtherState');
    const acousticDamageStateImport = localStorage.getItem(
      'acousticDamageState',
    );

    const ampFormStateImport = localStorage.getItem('ampFormState');
    const ampOtherStateImport = localStorage.getItem('ampOtherState');
    const ampDamageStateImport = localStorage.getItem('ampDamageState');

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

    if (acousticFormStateImport) {
      alterAcousticForm(JSON.parse(acousticFormStateImport));
    }
    if (acousticOtherStateImport) {
      alterAcousticOther(JSON.parse(acousticOtherStateImport));
    }
    if (acousticDamageStateImport) {
      alterAcousticDamage(JSON.parse(acousticDamageStateImport));
    }

    if (ampFormStateImport) {
      alterAmpForm(JSON.parse(ampFormStateImport));
    }
    if (ampOtherStateImport) {
      alterAmpOther(JSON.parse(ampOtherStateImport));
    }
    if (ampDamageStateImport) {
      alterAmpDamage(JSON.parse(ampDamageStateImport));
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

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(
        'acousticFormState',
        JSON.stringify(debouncedAcousticForm),
      );
      localStorage.setItem(
        'acousticOtherState',
        JSON.stringify(debouncedAcousticOther),
      );
      localStorage.setItem(
        'acousticDamageState',
        JSON.stringify(debouncedAcousticDamage),
      );
      console.debug('debounce triggered: writing acoustic to local storage');
    }, 1000);
  }, [debouncedAcousticForm, debouncedAcousticOther, debouncedAcousticDamage]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('ampFormState', JSON.stringify(debouncedAmpForm));
      localStorage.setItem('ampOtherState', JSON.stringify(debouncedAmpOther));
      localStorage.setItem(
        'ampDamageState',
        JSON.stringify(debouncedAmpDamage),
      );
      console.debug('debounce triggered: writing amp to local storage');
    }, 1000);
  }, [debouncedAmpForm, debouncedAmpOther, debouncedAmpDamage]);

  return (
    <FormContext.Provider value={formState}>
      <OtherContext.Provider value={otherState}>
        <DamageContext.Provider value={damageState}>
          <AcousticFormContext.Provider value={acousticFormState}>
            <AcousticOtherContext.Provider value={acousticOtherState}>
              <AcousticDamageContext.Provider value={acousticDamageState}>
                <AmpFormContext.Provider value={ampFormState}>
                  <AmpOtherContext.Provider value={ampOtherState}>
                    <AmpDamageContext.Provider value={ampDamageState}>
                      <Component
                        {...pageProps}
                        alterForm={alterForm}
                        alterOther={alterOther}
                        alterDamage={alterDamage}
                        alterAcousticForm={alterAcousticForm}
                        alterAcousticOther={alterAcousticOther}
                        alterAcousticDamage={alterAcousticDamage}
                        alterAmpForm={alterAmpForm}
                        alterAmpOther={alterAmpOther}
                        alterAmpDamage={alterAmpDamage}
                        itemType={itemType}
                        setItemType={setItemType}
                      />
                    </AmpDamageContext.Provider>
                  </AmpOtherContext.Provider>
                </AmpFormContext.Provider>
              </AcousticDamageContext.Provider>
            </AcousticOtherContext.Provider>
          </AcousticFormContext.Provider>
        </DamageContext.Provider>
      </OtherContext.Provider>
    </FormContext.Provider>
  );
}

export default MyApp;
