import React, {useState} from "react";

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Options from "./Options";

const ShowOptions = ({data, handleSave, savedAnswers}) => {

    const [selectedOption, setSelectedOption] = useState('');
    
    function handleChange(e, qid) {  
        const searchParam = {
            value: e.target.value,
            qid: qid
        };

        setSelectedOption(e.target.value);
        if(savedAnswers?.find(search => search.qid==qid)){
            handleSave(savedAnswers.map(data => data.qid==qid ? searchParam : data))
            return;
        }
        handleSave([...savedAnswers, searchParam]);
    }
    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">{data.question}</FormLabel>
                <Options 
                    data={data}
                    onchange={handleChange}
                    selectedOption={selectedOption}
                />
        </FormControl>
    )
}

export default ShowOptions;