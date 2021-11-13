import Form from "../components/Form/Form";
import FormOutput from "../components/FormOutput/FormOutput";
import Presets from "../components/Presets/Presets";
import { IFormContext } from "../lib/context";



const Home:React.FC<{alterForm:(Object:Partial<IFormContext>) =>void, alterOther:(Object:Partial<IFormContext>)=>void }> = ({alterForm, alterOther }) => {
    return (
        <div className=''>
            <Presets alterForm={alterForm} alterOther={alterOther}/>
            <Form alterForm={alterForm} alterOther={alterOther}/>
            <FormOutput/>
        </div>
    );
};

export default Home;
