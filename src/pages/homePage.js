import ApplyCard from "../components/applyCards";
import FormPropsTextFields from "../components/serachField";
import { _ } from 'lodash';

const HomePage = () =>{

    const cards = (<div style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
        {Array.from({ length: 6 }, (_, i) => <ApplyCard/>)}
    </div>)


    return(
        <>
        <FormPropsTextFields/>
        <div >
            {cards}
        </div>

        </>
    )
}

export default HomePage;