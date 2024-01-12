import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Timer.scss'

const Timer=()=>{
    const navigate=useNavigate();
    const [time, setTime] = useState(60);
    useEffect(() => {
        // if(time===0){
        //     navigate('/end-game')
        // }
        time > 0 && setTimeout(() => setTime(time - 1), 1000)
    }, [time])

    return <span className="timer">
{time}
    </span>
}

export default Timer;