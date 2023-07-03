import React, { useState } from 'react';
import data from "../data.json";
import ShowOptions from '../components/ShowOptions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Quiz = () => {
    const [savedAnswers, setSavedAnswers] = useState([]);
    const [marksObtained, setMarksObtained] = useState(0);

    function handleClick(e) {
        e.preventDefault();
        let marksObtainedCurr = 0; q
        for(let i=0; i<savedAnswers.length; i++) {
            const index = savedAnswers[i].qid;
            const registeredAnswer = savedAnswers[i].value;
            marksObtainedCurr = data.questions[index].correct_answer == registeredAnswer 
            ? marksObtainedCurr + 1
            : marksObtainedCurr + 0;
        }
        setMarksObtained(marksObtainedCurr); 
    }

    function getQuestionsUi() {
        let quesUi = [];
        for (let i = 0; i < 5; i++) {
            quesUi.push(
                <div key={i} style={{marginBottom: "10px"}}>
                    <ShowOptions
                        data={data.questions[i]}
                        handleSave={setSavedAnswers}
                        savedAnswers={savedAnswers}
                    />
                </div>
            )
        }
        return quesUi;
    }

    let quesUi = getQuestionsUi();

    return (
        <div className='conatainer' style={{marginTop: "20px", marginLeft: "20px"}}>
            {quesUi}
            <div style={{textAlign: "center"}}>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Button variant="contained" size="medium" onClick={handleClick}>
                        Submit Test
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default Quiz;