import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

import AnswerColumn from '../answerColumn/AnswerColumn';

import { useAppSelector } from '../../redux/store';
import { AnswersContainerPropType, CurrentQuestionType, QuestionType } from './AnswersTypes';

import './AnswersContainer.scss'

const initialQuestionType: CurrentQuestionType = { title: "", randomAnswers: [], correctAnswer: "" }

const mixUpAnswers = (incorrectAnswers: string[], correctAnswer: string) => {
    let allAnswers = [...incorrectAnswers, correctAnswer]
    let mixedUpAnswers: string[] = [];
    while (allAnswers.length) {
        const random = Math.floor(Math.random() * allAnswers.length);
        const el = allAnswers.splice(random, 1)[0];
        mixedUpAnswers.push(el)
    }
    return mixedUpAnswers;
}

const AnswersContainer = ({ isAnswered, questionIndex, setAnswer }: AnswersContainerPropType) => {
    const { questions } = useAppSelector((state) => state.questions);
    const [currentQuestion, setCurrentQuestion] = useState(initialQuestionType)
    useEffect(() => {
        const question: QuestionType = questions[questionIndex];
        if (question) {
            const mixedAnswers = mixUpAnswers(question.incorrect_answers, question.correct_answer)

            setCurrentQuestion({ title: question.question, randomAnswers: mixedAnswers, correctAnswer: question.correct_answer })
        }

    }, [questionIndex, questions])

    const isHavingQuestions = questions.length > 0;

    const answerQuestion = () => {
        setAnswer()
    }

    return <> {
        isHavingQuestions ? <Container className={`answers-container ${isAnswered ? "answered" : ""}`}>
            <Row className="question-title"><p>{currentQuestion.title}</p></Row>
            <Row>
                {currentQuestion.randomAnswers.slice(0, 2).map(answer => {
                    return <AnswerColumn answer={answer} answerQuestion={answerQuestion} correctAnswer={currentQuestion.correctAnswer} />
                })}

            </Row>
            {currentQuestion.randomAnswers.length > 2 && <Row>
                {currentQuestion.randomAnswers.slice(2).map(answer => {
                    return <AnswerColumn answer={answer} answerQuestion={answerQuestion} correctAnswer={currentQuestion.correctAnswer} />
                })}
            </Row>}
        </Container> : <Spinner className="spinner" animation="border" />
    }
    </>
}

export default AnswersContainer;