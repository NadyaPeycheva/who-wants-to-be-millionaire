
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';

import './AnswerColumn.scss';
const AnswerColumn=({answer,correctAnswer,answerQuestion}:any)=>{
    const [isAnswered,setIsAnswered]=useState(false);
    const isCorrectAnswer=answer===correctAnswer;

    const getAnswer=()=>{
        // answerQuestion()
        setIsAnswered(true)
    }

    
    return <Col className={`${isCorrectAnswer?"correct-answer":"incorrect-answer"} ${isAnswered?"show":""}`} onClick={getAnswer}>{answer}</Col>
}
export default AnswerColumn;