import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Timer.scss'

const Timer = ({ isAnswered }: { isAnswered: boolean }) => {
    const navigate = useNavigate();
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (time === 0) {
            navigate('/end-game')
        } else if (!isAnswered) {
            time > 0 && setTimeout(() => setTime(time - 1), 1000)
        } else if (isAnswered) {
            setTime(60)
        }
    }, [time, isAnswered])

    return <span className="timer">
        {time}
    </span>
}

export default Timer;