import { connect } from "react-redux";
import * as questionTypesActions from '../../actions/questionsActions';
import { useEffect, useState } from "react";

import Timer from "../../components/timer/Timer";

import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import SoundTrackIcon from "../../components/icon/SoundTrackIcon";
import AnswersContainer from "../../components/answersContainer/AnswersContainer";

import './questionsPage.scss'
const QuestionsPage = (props: any) => {
    useEffect(() => {
        props.fetchQuestions(categoryTypes.id, difficulty.toLowerCase())
    }, [])

    const [questionIndex, setQuestionIndex] = useState(0);

    const { categoryTypes, difficulty, questions } = props.questions;
    const isHaveQuestions = questions.length > 0;
    const currentQuestion= questions[questionIndex];
    console.log("questions",questions);
    
    let correctAnswer='';
    let allAnswers=[];
    if(currentQuestion){
        correctAnswer = currentQuestion.correct_answer;
        allAnswers=currentQuestion.incorrect_answers;
        allAnswers.push(correctAnswer)
    }

    const getNexQuestion = () => {
        if (questionIndex === questions.length - 1) {
            return;
        }
        setQuestionIndex((currentId) => currentId + 1)
    }

    return <div className="background-questions-container">
        {isHaveQuestions ?
            <>
            <SoundTrackIcon/>
            <Container className="questions-header">
            <Timer/>
            <Button className="next-btn" variant="secondary" size="lg" active onClick={getNexQuestion}>
                NEXT
            </Button>
                </Container>
          <AnswersContainer questionTitle={currentQuestion.question} allAnswers={allAnswers} correctAnswer={correctAnswer}/>
            </>
            : <Spinner className="spinner" animation="border" />
        }


    </div>
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        questions: state.questions,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchQuestions: (id: number, difficulty: string) => dispatch(questionTypesActions.fetchQuestions(id, difficulty)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);