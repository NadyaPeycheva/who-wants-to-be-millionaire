
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import { useAppDispatch } from '../../redux/store';
import { answersActions } from '../../redux/reducers/answersReducers';

import './AnswerColumn.scss';

type AnswerColumnPropType = {
    answer: string,
    correctAnswer: string, answerQuestion: () => void
}
const AnswerColumn = ({ answer, correctAnswer, answerQuestion }: AnswerColumnPropType) => {
    useEffect(() => {
        setIsAnswered(false)
    }, [answer])

    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [icClicked, setIsAnswered] = useState(false);
    const isCorrectAnswer = answer === correctAnswer;

    const getAnswer = () => {
        if (isCorrectAnswer) {
            dispatch(answersActions.countCorrectAnswers())
        } else {
            navigate('/end-game')
        }
        answerQuestion()
        setIsAnswered(true)
    }


    return <Col className={`${isCorrectAnswer ? "correct-answer" : "incorrect-answer"} ${icClicked ? "show" : ""}`} onClick={getAnswer}>{answer}</Col>
}
export default AnswerColumn;