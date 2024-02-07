import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import { useAppDispatch } from '../../redux/store';
import { fetchQuestions } from '../../redux/reducers/questionsReducers';
import { fetchCategoriesApi } from '../../api/categoriesApi';

import { CategoryType } from '../../redux/types/Categories';

import './StartGame.scss';

const initialQuestionState: { selectedCategory: CategoryType, selectedDifficulty: string } = {
    selectedCategory: { id: 0, name: "Choose category" },
    selectedDifficulty: "Choose difficulty"
}

const StartGame = () => {
    useEffect(() => {
        getQuestionCategories()

    }, [])

    const [questionCategories, setQuestionCategories] = useState<[]>([]);
    const [questionsProperties, setQuestionsProperties] = useState(initialQuestionState);

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const isBtnDisabled = questionsProperties.selectedCategory.name !== "Choose category" && questionsProperties.selectedDifficulty !== "Choose difficulty"

    const getQuestionCategories = async () => {
        const questionCategories = await fetchCategoriesApi();
        setQuestionCategories(questionCategories)
    }

    const getCategories = (checkedCategory: { name: string, id: number }) => {
        setQuestionsProperties(state => { return { ...state, selectedCategory: checkedCategory } })
    }

    const getDifficulty = (event: React.MouseEvent<HTMLElement>) => {
        const checkedDifficulty = event.currentTarget.textContent || "";
        setQuestionsProperties(state => { return { ...state, selectedDifficulty: checkedDifficulty } })
    }

    const startGame = () => {
        const questionData = { id: questionsProperties.selectedCategory.id, difficulty: questionsProperties.selectedDifficulty.toLowerCase() }
        dispatch(fetchQuestions(questionData))
        navigate('/questions');
    }


    return <div className="background-start-container">
        <Container className='container'>
            <Row>
                <Button className='btn' variant="secondary" size="lg" disabled={!isBtnDisabled} onClick={startGame}>
                    Start Game
                </Button>
            </Row>
            <Row>
                <p>Category:</p>
                <Dropdown className='btn dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {questionsProperties.selectedCategory.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {questionCategories.map((category: { name: string, id: number }) => {
                            return <Dropdown.Item key={category.id} onClick={() => getCategories(category)}>{category.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row>
                <p>Difficulty:</p>
                <Dropdown className='btn dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {questionsProperties.selectedDifficulty}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={getDifficulty}>Easy</Dropdown.Item>
                        <Dropdown.Item onClick={getDifficulty}>Medium</Dropdown.Item>
                        <Dropdown.Item onClick={getDifficulty}>Hard</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
        </Container>
    </div >
}

export default StartGame;