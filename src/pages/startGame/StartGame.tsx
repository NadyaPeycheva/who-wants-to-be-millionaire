import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import * as categoryActions from '../../actions/categoryActions';
import * as questionTypesActions from '../../actions/questionsTypesActions';

import './StartGame.scss';
const StartGame = (props: any) => {
    useEffect(() => {
        props.fetchEmployees()
    }, [])
    const navigate = useNavigate();
    const categories = props.categories;

    const getCategories = (e: any) => {
        const questionType = e;
        props.getCategoryTypes(questionType)
    }

    const getDifficulty = (e:any) => {
        const difficulty = e.target.text;
        props.getDifficultyTypes(difficulty)
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
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categories.categories.map((category: { name: string, id: number }) => {
                            return <Dropdown.Item onClick={() => getCategories(category)}>{category.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row>
                <p>Difficulty:</p>
                <Dropdown className='btn dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
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
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        categories: state.categories,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchEmployees: () => dispatch(categoryActions.fetchCategories()),
        getCategoryTypes: (type: { name: string, id: number }) => dispatch(questionTypesActions.getCategoryTypes(type)),
        getDifficultyTypes: (type: string) => dispatch(questionTypesActions.getDifficultyTypes(type)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);

