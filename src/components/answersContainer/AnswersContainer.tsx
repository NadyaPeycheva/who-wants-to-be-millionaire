
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './AnswersContainer.scss'
import { useEffect, useState } from 'react';

import AnswerColumn from '../answerColumn/AnswerColumn';

const AnswersContainer = ({ questionTitle, allAnswers,correctAnswer }: any) => {
    const incomingArray = allAnswers;
    const [randomAnswers,setRandomAnswers]=useState<string[]>([])
  
    const [isAnswered,setIsAnswered]=useState(false)

    useEffect(() => {
        while (incomingArray.length) {
            const random = Math.floor(Math.random() * incomingArray.length);
            const el = incomingArray.splice(random, 1)[0];
            setRandomAnswers(currentState=>[...currentState,el])
        }
    }, [])

    const answerQuestion=()=>{
        setIsAnswered(true)
    }


    return <Container className={`questions-container answered ${isAnswered?"answered":""}`}>
        <Row className="question-title"><p>{questionTitle}</p></Row>
        <Row>
            <AnswerColumn answer={randomAnswers[0]} answerQuestion={answerQuestion} correctAnswer={correctAnswer}/>
            <AnswerColumn answer={randomAnswers[1]} answerQuestion={answerQuestion} correctAnswer={correctAnswer}/>

        </Row>
        <Row>
        <AnswerColumn answer={randomAnswers[2]} answerQuestion={answerQuestion} correctAnswer={correctAnswer}/>
        <AnswerColumn answer={randomAnswers[3]} answerQuestion={answerQuestion} correctAnswer={correctAnswer}/>
        </Row>
    </Container>

}

export default AnswersContainer;