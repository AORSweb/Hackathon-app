import React from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

const Options = ({ data, onchange, selectedOption }) => {
    return (<>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name={data.question}
            value={selectedOption}
            onChange={(e) => onchange(e, data.id)}
        >
            <FormControlLabel
                value={data.option1}
                control={<Radio />}
                label={data.option1}
            />
            <FormControlLabel
                value={data.option2}
                control={<Radio />}
                label={data.option2}
            />
            <FormControlLabel
                value={data.option3}
                control={<Radio />}
                label={data.option3}
            />
            <FormControlLabel
                value={data.option4}
                control={<Radio />}
                label={data.option4}
            />
        </RadioGroup>
    </>)
}

export default Options;