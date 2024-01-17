import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import * as categoryActions from '../../actions/categoryActions';
import * as questionTypesActions from '../../actions/questionsActions';

import './StartGame.scss';
//types
import { FetchCategoriesType } from '../../actions/categoryActions';
import { GetCategoryTypes } from '../../actions/questionsActions';
import { GetDifficultyTypes } from '../../actions/questionsActions';
import { QuestionType } from '../../utils/types/Questions';
import { CategoriesType } from '../../utils/types/Categories';
import { RootState } from '../../redux/store';
import { DispatchType } from '../../redux/store';

type StartGamePropsType={
    questions:QuestionType,
    categories:CategoriesType,
    fetchCategories:FetchCategoriesType,
    getCategoryTypes:GetCategoryTypes,
    getDifficultyTypes:GetDifficultyTypes
}

const StartGame = ({questions,categories,fetchCategories,getCategoryTypes,getDifficultyTypes}: StartGamePropsType) => {
    useEffect(() => {
        fetchCategories()
    }, [])
    const navigate = useNavigate();
    // const categories = categories;

    const getCategories = (e:{ name: string, id: number }) => {
        const questionType = e;        
        getCategoryTypes(questionType)
    }

    const getDifficulty = (e:React.MouseEvent<HTMLElement>) => {
        const difficulty = e.currentTarget.textContent||"";
        getDifficultyTypes(difficulty)
    }

    return <div className="background-start-container">
        <Container className='container'>
            <Row>
                <Button className='btn' variant="secondary" size="lg" onClick={() => {
                    navigate('/questions');
                }}>
                    Start Game
                </Button>
            </Row>
            <Row>
                <p>Category:</p>
                <Dropdown className='btn dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {questions.categoryTypes.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categories.categories.map((category: { name: string, id: number }) => {
                            return <Dropdown.Item key={category.id} onClick={() => getCategories(category)}>{category.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row>
                <p>Difficulty:</p>
                <Dropdown className='btn dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {questions.difficulty}
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
const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        categories: state.categories,
        questions: state.questions,
    };
};

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        fetchCategories: () => dispatch(categoryActions.fetchCategories()),
        getCategoryTypes: (type: { name: string, id: number }) => dispatch(questionTypesActions.getCategoryTypes(type)),
        getDifficultyTypes: (type: string) => dispatch(questionTypesActions.getDifficultyTypes(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);

