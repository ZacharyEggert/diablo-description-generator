import Form from "../components/form/Form";
import Presets from "../components/Presets/Presets";
import { SVP } from "../lib/types";



const Home:React.FC<{alterForm:(Object:SVP) =>void }> = ({alterForm}) => {
    return (
        <div className=''>
            <Presets alterForm={alterForm}/>
            <Form/>
        </div>
    );
};

export default Home;
