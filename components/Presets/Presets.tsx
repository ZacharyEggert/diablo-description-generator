import { IAcousticDamageAreas, IAmpDamageAreas, IDamageAreas } from 'lib/types';
import {
  IAcousticFormContext,
  UseAcousticFormContext,
  UseAcousticOtherContext,
} from 'lib/acousticContext';
import {
  IAmpFormContext,
  UseAmpFormContext,
  UseAmpOtherContext,
} from 'lib/ampContext';
import { IFormContext, UseFormContext, UseOtherContext } from 'lib/context';
import React, { MouseEventHandler, useEffect } from 'react';
import {
  defaultAcousticDamageContext,
  defaultAmpDamageContext,
  defaultDamageContext,
} from 'lib/damageContext';
import formPresets, {
  acousticFormPresetReset,
  acousticFormPresets,
  ampFormPresetReset,
  ampFormPresets,
  formPresetReset,
} from './formPresets';

interface Props {
  alterForm: (Object: Partial<IFormContext>) => void;
  alterAmpForm: (Object: Partial<IAmpFormContext>) => void;
  alterAcousticForm: (Object: Partial<IAcousticFormContext>) => void;
  alterOther: (Object: Partial<IFormContext>) => void;
  alterAmpOther: (Object: Partial<IAmpFormContext>) => void;
  alterAcousticOther: (Object: Partial<IAcousticFormContext>) => void;
  alterDamage: (Object: {
    rating?: Partial<IDamageAreas>;
    description?: Partial<IDamageAreas>;
  }) => void;
  alterAmpDamage: (Object: {
    rating?: Partial<IAmpDamageAreas>;
    description?: Partial<IAmpDamageAreas>;
  }) => void;
  alterAcousticDamage: (Object: {
    rating?: Partial<IAcousticDamageAreas>;
    description?: Partial<IAcousticDamageAreas>;
  }) => void;
  itemType: 'guitar' | 'amplifier' | 'acoustic';
  setItemType: (itemType: 'guitar' | 'amplifier' | 'acoustic') => void;
}
const Presets: React.FC<Props> = ({
  alterForm,
  alterOther,
  alterDamage,
  itemType,
  setItemType,
  alterAcousticDamage,
  alterAcousticForm,
  alterAcousticOther,
  alterAmpDamage,
  alterAmpForm,
  alterAmpOther,
}) => {
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const formState = UseFormContext();
  const otherState = UseOtherContext();

  const ampFormState = UseAmpFormContext();
  const ampOtherState = UseAmpOtherContext();

  const acousticFormState = UseAcousticFormContext();
  const acousticOtherState = UseAcousticOtherContext();

  const [presets, setPresets] = React.useState<{
    [key: string]: {
      formState: IFormContext;
      otherState: IFormContext;
    } & { name: string };
  }>(formPresets);

  const [ampPresets, setAmpPresets] = React.useState<{
    [key: string]: {
      formState: IAmpFormContext;
      otherState: IAmpFormContext;
    } & { name: string };
  }>(ampFormPresets);

  const [acousticPresets, setAcousticPresets] = React.useState<{
    [key: string]: {
      formState: IAcousticFormContext;
      otherState: IAcousticFormContext;
    } & { name: string };
  }>(acousticFormPresets);

  useEffect(() => {
    const localPresets = localStorage.getItem('presets');
    if (localPresets) {
      setPresets(JSON.parse(localPresets));
    }

    const localAmpPresets = localStorage.getItem('ampPresets');
    if (localAmpPresets) {
      setAmpPresets(JSON.parse(localAmpPresets));
    }

    const localAcousticPresets = localStorage.getItem('acousticPresets');
    if (localAcousticPresets) {
      setAcousticPresets(JSON.parse(localAcousticPresets));
    }
  }, []);

  const importPreset = () => {
    try {
      const newPreset = JSON.parse(prompt('Enter a preset to import', '{}'));
      if (newPreset && newPreset !== '{}') {
        const replaceOrUpdate = confirm(
          'Are you sure you want to import this preset?',
        );
        if (replaceOrUpdate) {
          const newPresets = { ...presets, ...newPreset };
          delete newPresets['null'];
          setPresets(newPresets);
          localStorage.setItem('presets', JSON.stringify(newPresets));
        }
      }
    } catch (error) {
      console.debug('Error importing presets', error);
    }
  };

  const printPresetToConsole = () => {
    const selectedPreset = selectRef.current.value;
    // console.log(selectedPreset);

    if (selectedPreset && selectedPreset === 'select...') {
      return;
    }

    let preset: {
      formState: IAmpFormContext | IAcousticFormContext | IFormContext;
      otherState: IAmpFormContext | IAcousticFormContext | IFormContext;
    } & { name: string };

    if (itemType === 'guitar') {
      preset = presets[selectedPreset];
    } else if (itemType === 'amplifier') {
      preset = ampPresets[selectedPreset];
    } else if (itemType === 'acoustic') {
      preset = acousticPresets[selectedPreset];
    }

    let AllPresets: any = presets;

    if (itemType === 'guitar') {
      AllPresets = presets;
    } else if (itemType === 'amplifier') {
      AllPresets = ampPresets;
    } else if (itemType === 'acoustic') {
      AllPresets = acousticPresets;
    }

    console.dir(JSON.stringify(AllPresets));
    console.log(JSON.stringify({ [preset.name]: preset }));
  };

  const savePreset: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.ctrlKey) {
      importPreset();
      return;
    }
    // printStateToConsole();
    const name = prompt(
      'Enter a name for this preset. You can delete it later by pressing ` (above the tab key)',
    );
    if (name !== '') {
      if (itemType === 'guitar') {
        const preset = {
          formState: {
            ...formState,
            ...formPresetReset.formState,
          },
          otherState: {
            ...otherState,
            ...formPresetReset.otherState,
          },
          name,
        };
        const newPresets = { ...presets, [name]: preset };
        setPresets(newPresets);
        localStorage.setItem('presets', JSON.stringify(newPresets));
      } else if (itemType === 'amplifier') {
        const preset = {
          formState: {
            ...ampFormState,
            ...ampFormPresetReset.formState,
          },
          otherState: {
            ...ampOtherState,
            ...ampFormPresetReset.otherState,
          },
          name,
        };
        const newAmpPresets = { ...ampPresets, [name]: preset };
        setAmpPresets(newAmpPresets);
        localStorage.setItem('ampPresets', JSON.stringify(newAmpPresets));
      } else if (itemType === 'acoustic') {
        const preset = {
          formState: {
            ...acousticFormState,
            ...acousticFormPresetReset.formState,
          } as IAcousticFormContext,
          otherState: {
            ...ampOtherState,
            ...acousticFormPresetReset.otherState,
          } as IAcousticFormContext,
          name,
        };
        const newAcousticPresets = {
          ...acousticPresets,
          [name]: preset,
        };
        setAcousticPresets(newAcousticPresets);
        localStorage.setItem(
          'acousticPresets',
          JSON.stringify(newAcousticPresets),
        );
      }
    } else {
      printPresetToConsole();
    }
  };

  const deletePreset = () => {
    const confirm = window.confirm(
      'Are you sure you want to delete this preset?',
    );
    if (!confirm) return;
    const name = selectRef.current?.value;
    if (name) {
      if (itemType === 'guitar') {
        const newPresets = { ...presets };
        delete newPresets[name];
        setPresets(newPresets);
        localStorage.setItem('presets', JSON.stringify(newPresets));
      } else if (itemType === 'amplifier') {
        const newAmpPresets = { ...ampPresets };
        delete newAmpPresets[name];
        setAmpPresets(newAmpPresets);
        localStorage.setItem('ampPresets', JSON.stringify(newAmpPresets));
      } else if (itemType === 'acoustic') {
        const newAcousticPresets = { ...acousticPresets };
        delete newAcousticPresets[name];
        setAcousticPresets(newAcousticPresets);
        localStorage.setItem(
          'acousticPresets',
          JSON.stringify(newAcousticPresets),
        );
      }
    }
  };

  const handlePresetApplication = () => {
    const selectedPreset = selectRef.current.value;

    if (selectedPreset && selectedPreset === 'select...') {
      return;
    }

    if (itemType === 'guitar') {
      const preset = presets[selectedPreset];

      alterForm(preset.formState);
      alterOther(preset.otherState);
      alterDamage(defaultDamageContext);

      console.log(`applying ${itemType} preset ${preset.name}`);
    } else if (itemType === 'amplifier') {
      const preset = ampPresets[selectedPreset];

      alterAmpForm(preset.formState);
      alterAmpOther(preset.otherState);
      alterAmpDamage(defaultAmpDamageContext);

      console.log(`applying ${itemType} preset ${preset.name}`);
    } else if (itemType === 'acoustic') {
      const preset = acousticPresets[selectedPreset];

      alterAcousticForm(preset.formState);
      alterAcousticOther(preset.otherState);
      alterAcousticDamage(defaultAcousticDamageContext);
      console.log(`applying ${itemType} preset ${preset.name}`);
    }
  };

  const toggleType = () => {
    if (itemType === 'guitar') {
      setItemType('acoustic');
    } else if (itemType === 'acoustic') {
      setItemType('amplifier');
    } else if (itemType === 'amplifier') {
      setItemType('guitar');
    }
  };

  return (
    <div className='flex justify-between py-4 pr-8 text-white'>
      <div>
        <h3 className='mx-12 inline text-2xl font-bold'>Presets</h3>
        <select
          className='mx-4 my-1 w-72 rounded-md border border-neutral-200 bg-neutral-800 py-1 px-2 capitalize'
          defaultValue='select...'
          ref={selectRef}
          onKeyPress={(e) => {
            if (
              e.key === '`' &&
              selectRef.current.value !== 'select...' &&
              selectRef.current.value !== 'Clear'
            ) {
              deletePreset();
            }
          }}>
          <option value='select...' disabled>
            Select a preset
          </option>
          <option value='Clear'>Clear</option>

          {Object.keys(
            itemType === 'guitar'
              ? presets
              : itemType === 'acoustic'
              ? acousticPresets
              : ampPresets,
          ).length > 0 &&
            Object.values(
              itemType === 'guitar'
                ? presets
                : itemType === 'acoustic'
                ? acousticPresets
                : ampPresets,
            ).map((preset, i) =>
              preset.name === 'Clear' || preset.name === 'null' ? null : (
                <option key={i} value={preset.name} className='bg-neutral-800'>
                  {preset.name}
                </option>
              ),
            )}
        </select>
        <button
          onClick={handlePresetApplication}
          className='mx-2 rounded-md border border-neutral-200 py-1 px-2 capitalize'>
          Apply
        </button>
      </div>
      <div>
        <button
          onClick={savePreset}
          className='my-1 rounded-md border border-neutral-200 py-1 px-2 capitalize'>
          Make Preset
        </button>
      </div>
      <div>
        <button
          onClick={toggleType}
          className='my-1 rounded-md border border-neutral-200 py-1 px-2 capitalize'>
          {itemType}
        </button>
      </div>
    </div>
  );
};

export default Presets;
