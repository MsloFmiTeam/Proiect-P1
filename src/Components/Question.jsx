import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Question = (props) => {
    const [result, setResult] = useState(0);
    return (
        
            <li key = {props.id}>
                <p>{props.question.text}</p>
                <button 
                    onClick = {() => {
                        setResult(props.question.answerOne)
                        props.nextQuestion()
                    }}
                > Answer 1 </button>
                <button 
                    onClick = {() => {
                        setResult(props.question.answerTwo)
                        props.nextQuestion()
                    }}
                > Answer 2 </button>
                <button 
                    onClick = {() => {
                        setResult(props.question.answerThree)
                        props.nextQuestion()
                    }}
                > Answer 3 </button>
            </li>
        
    )
}

export default Question;
