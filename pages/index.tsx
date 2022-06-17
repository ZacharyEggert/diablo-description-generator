import {
  IAcousticFormContext,
  IAmpFormContext,
  IDamageContext,
} from 'lib/types';

import AcousticDamageForm from 'components/DamageForm/AcousticDamageForm';
import AcousticForm from 'components/Form/AcousticForm';
import AmpDamageForm from 'components/DamageForm/AmpDamageForm';
import AmpForm from 'components/Form/AmpForm';
import DamageForm from 'components/DamageForm/DamageForm';
import FormOutput from 'components/FormOutput/FormOutput';
import GuitarForm from 'components/Form/GuitarForm';
import { IFormContext } from 'lib/context';
import Presets from 'components/Presets/Presets';

const Home: React.FC<{
  alterForm: (Object: Partial<IFormContext>) => void;
  alterAmpForm: (Object: Partial<IAmpFormContext>) => void;
  alterAcousticForm: (Object: Partial<IAcousticFormContext>) => void;
  alterOther: (Object: Partial<IFormContext>) => void;
  alterAmpOther: (Object: Partial<IAmpFormContext>) => void;
  alterAcousticOther: (Object: Partial<IAcousticFormContext>) => void;
  alterDamage: (Object: Partial<IDamageContext>) => void;
  alterAmpDamage: (Object: Partial<IDamageContext>) => void;
  alterAcousticDamage: (Object: Partial<IDamageContext>) => void;
  itemType: 'guitar' | 'amplifier' | 'acoustic';
  setItemType: (itemType: 'guitar' | 'amplifier' | 'acoustic') => void;
}> = ({
  alterForm,
  alterOther,
  alterDamage,
  itemType,
  setItemType,
  alterAcousticDamage,
  alterAmpDamage,
  alterAmpForm,
  alterAcousticForm,
  alterAmpOther,
  alterAcousticOther,
}) => {
  return (
    <div className='min-h-screen'>
      <Presets
        alterForm={alterForm}
        alterOther={alterOther}
        alterDamage={alterDamage}
        itemType={itemType}
        setItemType={setItemType}
        alterAcousticDamage={alterAcousticDamage}
        alterAmpDamage={alterAmpDamage}
        alterAmpForm={alterAmpForm}
        alterAcousticForm={alterAcousticForm}
        alterAmpOther={alterAmpOther}
        alterAcousticOther={alterAcousticOther}
      />
      {itemType === 'guitar' && (
        <>
          <GuitarForm
            alterForm={alterForm}
            alterOther={alterOther}
            itemType={itemType}
          />
          <DamageForm alterDamage={alterDamage} itemType={itemType} />{' '}
          {/* for damage */}
        </>
      )}

      {itemType === 'amplifier' && (
        <>
          <AmpForm
            alterForm={alterAmpForm}
            alterOther={alterAmpOther}
            itemType={itemType}
          />
          <AmpDamageForm alterDamage={alterAmpDamage} itemType={itemType} />{' '}
          {/* for damage */}
        </>
      )}

      {itemType === 'acoustic' && (
        <>
          <AcousticForm
            alterForm={alterAcousticForm}
            itemType={itemType}
            alterOther={alterAcousticOther}
          />
          <AcousticDamageForm
            alterDamage={alterAcousticDamage}
            itemType={itemType}
          />
          {/* for damage */}
        </>
      )}

      <FormOutput />
    </div>
  );
};

export default Home;
