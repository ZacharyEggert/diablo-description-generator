import { damageLabelPrettier, damageOptions } from 'lib/damage/damage';
import { useDamageContext } from 'lib/damageContext';
import { IDamageContext } from 'lib/types';
import DamageSelect from './DamageSelect';

const DamageForm: React.FC<{
    alterDamage: (Object: Partial<IDamageContext>) => void;
}> = ({ alterDamage }) => {
    const damageState = useDamageContext();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className='flex flex-col w-full px-12 pt-12 pb-16 text-white'>
            <form
                className='grid grid-cols-2 pb-8 mx-auto md:grid-cols-4 md:w-11/12'
                onSubmit={onSubmit}>
                {Object.keys(damageState).map((key) => {
                    let opt = damageOptions[key];

                    return (
                        <DamageSelect
                            label={damageLabelPrettier[key]}
                            key={key}
                            field={key}
                            options={opt}
                            alterDamage={alterDamage}
                        />
                    );
                })}
            </form>
        </div>
    );
};

export default DamageForm;
