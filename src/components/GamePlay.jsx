import React, { useState } from 'react'
import styled from 'styled-components';


const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [showRules, setShowRules] = useState(false)
    const [currentDice, setCurrentDice] = useState(1);
    const [selectNumber, setSelectNumber] = useState();
    const [error, setError] = useState("");
     
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectNumber) {
            setError("Please select a number");
            return
        };

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev)=> (prev <=0? 0: prev -2))
        }

        setSelectNumber(undefined);
    }
    
    const resetScore = () => {
        setScore(undefined);

    }


    return (
        <MainContainer>
            <div className="top_section">
                
            </div>
            
    </MainContainer>
    )
}


export default GamePlay;


const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
