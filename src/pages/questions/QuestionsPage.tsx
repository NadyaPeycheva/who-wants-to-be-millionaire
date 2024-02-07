import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Timer from "../../components/timer/Timer";
import SoundTrackIcon from "../../components/icon/SoundTrackIcon";
import AnswersContainer from "../../components/answersContainer/AnswersContainer";

import './questionsPage.scss'

const QuestionsPage = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState<boolean>(false);

    const getNexQuestion = () => {
        if (questionIndex === 15) {
            return;
        }
        setIsAnswered(false);
        setQuestionIndex((currentId) => currentId + 1)
    }

    return <div className="background-questions-container">
        <>
            <SoundTrackIcon />
            <Container className="questions-header">
                <Timer isAnswered={isAnswered} />
                {isAnswered && <Button className="next-btn" variant="secondary" size="lg" active onClick={getNexQuestion}>
                    NEXT
                </Button>}
            </Container>
            <AnswersContainer isAnswered={isAnswered} questionIndex={questionIndex} setAnswer={() => { setIsAnswered(true) }} />
        </>
    </div>
}

export default QuestionsPage;