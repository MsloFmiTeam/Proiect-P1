import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Question from './Question';

const Quiz = () => {
    let navigate = useNavigate()
    const [nextQuestion, setNextQuestion] = useState(0)

    const questions = [
        {
            id: 1,
            text: "Question 1",
            answerOne: 1,
            answerTwo: 2,
            answerThree: 3,
            finalAnswer: 0
        },
        {
            id: 2,
            text: "Question 2",
            answerOne: 1,
            answerTwo: 2,
            answerThree: 3,
            finalAnswer: 0
        },
        {
            id: 3,
            text: "Question 3",
            answerOne: 1,
            answerTwo: 2,
            answerThree: 3,
            finalAnswer: 0
        },
        {
            id: 4,
            text: "Question 4",
            answerOne: 1,
            answerTwo: 2,
            answerThree: 3,
            finalAnswer: 0
        }
    ];
    const displayEachQuestionById = (questions, index) => {
          return <Question question = {questions[index]} 
                                nextQuestion = {() => {
                                    nextQuestion !== 3 ?
                                        setNextQuestion(nextQuestion + 1)
                                        :
                                        navigate("/results")
                                    }}/> 
    }
    return (
        <div>
            <p>Ati parcurs {nextQuestion + 1} intrebari din {questions.length}</p>
            <ul>
                {
                    displayEachQuestionById(questions, nextQuestion)  
                }    
            </ul>
        </div>
    )
}

export default Quiz;
