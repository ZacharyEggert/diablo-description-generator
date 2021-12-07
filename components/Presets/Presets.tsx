import React, { MouseEventHandler, useEffect } from 'react';
import {
    emptyContext,
    IFormContext,
    UseFormContext,
    UseOtherContext,
} from 'lib/context';
import formPresets from './formPresets';
import { defaultDamageContext } from 'lib/damageContext';
import { IDamageAreas, IDamageContext } from 'lib/types';

interface Props {
    alterForm: (Object: Partial<IFormContext>) => void;
    alterOther: (Object: Partial<IFormContext>) => void;
    alterDamage: (Object: {
        rating?: Partial<IDamageAreas>;
        description?: Partial<IDamageAreas>;
    }) => void;
}
const Presets: React.FC<Props> = ({ alterForm, alterOther, alterDamage }) => {
    const selectRef = React.useRef<HTMLSelectElement>(null);
    const formState = UseFormContext();
    const otherState = UseOtherContext();

    const [presets, setPresets] = React.useState<{
        [key: string]: {
            formState: IFormContext;
            otherState: IFormContext;
        } & { name: string };
    }>(formPresets);

    useEffect(() => {
        const localPresets = localStorage.getItem('presets');
        if (localPresets) {
            setPresets(JSON.parse(localPresets));
        }
    }, []);

    const importPresetList = () => {
        try {
            const newPresetList = JSON.parse(
                prompt('Enter a list of presets to import', '{}'),
            );
            const replaceOrUpdate = confirm(
                'Do you want to replace the current presets or update them? Yes to replace, No to update',
            );
            if (newPresetList && newPresetList !== {}) {
                setPresets(
                    replaceOrUpdate
                        ? { ...newPresetList }
                        : { ...presets, ...newPresetList },
                );
            }
        } catch (error) {
            console.debug('Error importing presets', error);
        }
    };

    const savePreset: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (e.ctrlKey) {
            importPresetList();
            return;
        }
        // printStateToConsole();
        const name = prompt(
            'Enter a name for this preset. You can delete it later by pressing ` (above the tab key)',
        );
        if (name) {
            const preset = {
                formState: {
                    ...formState,
                    year: '',
                    serial: '',
                    weight: '',
                    finish: '',
                    modifications: 'sel',
                    otherFeatures: 'sel',
                },
                otherState: {
                    ...otherState,
                    year: 'XXXX',
                    serial: '-',
                    weight: 'Xlbs Xoz',
                    finish: '',
                    modifications: '',
                    otherFeatures: '',
                },
                name,
            };
            const newPresets = { ...presets, [name]: preset };
            setPresets(newPresets);
            localStorage.setItem('presets', JSON.stringify(newPresets));
        } else {
            console.log(JSON.stringify(presets));
        }
    };

    const deletePreset = () => {
        const confirm = window.confirm(
            'Are you sure you want to delete this preset?',
        );
        if (!confirm) return;
        const name = selectRef.current?.value;
        if (name) {
            const newPresets = { ...presets };
            delete newPresets[name];
            setPresets(newPresets);
            localStorage.setItem('presets', JSON.stringify(newPresets));
        }
    };

    const printStateToConsole = () => {
        console.log({ formState, otherState });
    };

    const handlePresetApplication = () => {
        const selectedPreset = selectRef.current.value;
        // console.log(selectedPreset);
        const preset = presets[selectedPreset];
        // console.log(preset, presets);
        alterForm(preset.formState);
        alterOther(preset.otherState);
        alterDamage(defaultDamageContext);
    };

    return (
        <div className='py-4 text-white'>
            <h3 className='inline mx-12 text-2xl font-bold'>Presets</h3>
            <select
                className='mx-4 bg-gray-800 w-72'
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
                {Object.values(presets).map((preset, i) => (
                    <option
                        key={i}
                        value={Object.keys(presets)[i]}
                        className='bg-gray-800'>
                        {preset.name}
                    </option>
                ))}
            </select>
            <button onClick={handlePresetApplication} className='mx-4'>
                Apply
            </button>
            <button onClick={savePreset} className='float-right mx-4'>
                Make Preset
            </button>
        </div>
    );
};

export default Presets;
