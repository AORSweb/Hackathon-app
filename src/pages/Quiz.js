import React, { useState, useEffect } from 'react';
import data from "../data.json";
import ShowOptions from '../components/ShowOptions';
import ModalBox from '../components/ModalBox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"

const Quiz = () => {
    const [savedAnswers, setSavedAnswers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [marksObtained, setMarksObtained] = useState(0);
    const navigate = useNavigate();

    function handleClose(){
        setOpenModal(false);
        navigate("/");
    }

    function handleClick(e) {
        e.preventDefault();
        let marksObtainedCurr = 0;
        for (let i = 0; i < savedAnswers.length; i++) {
            const index = savedAnswers[i].qid;
            const registeredAnswer = savedAnswers[i].value;
            marksObtainedCurr = data.questions[index].correct_answer == registeredAnswer
                ? marksObtainedCurr + 1
                : marksObtainedCurr + 0;
        }
        setMarksObtained(marksObtainedCurr);
        setOpenModal(true);
    }

    function getQuestionsUi() {
        let quesUi = [];
        for (let i = 0; i < 5; i++) {
            quesUi.push(
                <div key={i} style={{ marginBottom: "10px" }}>
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
        <div className='conatainer' style={{ marginTop: "20px", marginLeft: "20px" }}>
            {quesUi}
            <div style={{ textAlign: "center" }}>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Button variant="contained" size="medium" onClick={handleClick}>
                        Submit Test
                    </Button>
                </Box>
                {openModal
                    ? <ModalBox 
                            open={openModal}
                            handleClose={handleClose}
                            marksObtained={marksObtained}
                    />
                    : null
                }
            </div>
        </div>
    );
}

export default Quiz;