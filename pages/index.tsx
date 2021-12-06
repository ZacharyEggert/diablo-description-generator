import DamageForm from 'components/DamageForm/DamageForm';
import Form from 'components/Form/Form';
import FormOutput from 'components/FormOutput/FormOutput';
import Presets from 'components/Presets/Presets';
import { IFormContext } from 'lib/context';
import { IDamageContext } from 'lib/types';

const Home: React.FC<{
    alterForm: (Object: Partial<IFormContext>) => void;
    alterOther: (Object: Partial<IFormContext>) => void;
    alterDamage: (Object: Partial<IDamageContext>) => void;
}> = ({ alterForm, alterOther, alterDamage }) => {
    return (
        <div className=''>
            <Presets
                alterForm={alterForm}
                alterOther={alterOther}
                alterDamage={alterDamage}
            />
            <Form alterForm={alterForm} alterOther={alterOther} />
            <DamageForm alterDamage={alterDamage} />
            <FormOutput />
        </div>
    );
};

export default Home;
