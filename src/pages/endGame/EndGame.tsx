import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useAppSelector } from '../../redux/store';

import { prize } from '../../utils/prizeTable';

import './EndGame.scss';

const EndGame = () => {
    const navigate = useNavigate();
    const { correctAnswers } = useAppSelector((state) => state.answers);

    return <div className='end-game-container'>
        <Row className='header'>
            <h2>End of the Game</h2>
            <p>Submitted wrong answers or timed out</p>
            <p>Answered questions: {correctAnswers}</p>
        </Row>
        <Row className='prize-row'>
            <Container className='prize-container'>
                <Table className='prize-table'>
                    <tbody>
                        {prize.reverse().map(p => {
                            const amountWon = correctAnswers === p.id;

                            return <tr key={p.id}>
                                <td className={amountWon ? 'prize-won' : ""}>{p.id}: {p.amount}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </Container>

        </Row>
        <Row className='btn-row'>
            <Button className='replay-btn' variant="secondary" size="lg" onClick={() => { navigate('/') }}>
                Play again
            </Button>
        </Row>
    </div>
}
export default EndGame;