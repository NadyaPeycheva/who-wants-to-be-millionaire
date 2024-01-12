import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVolumeUp,
    faVolumeDown,
} from '@fortawesome/free-solid-svg-icons';

import './SoundTrackIcon.scss';
import sound from '../../utils/sounds/whoWantsToBeMillionaire.wav';

const SoundTrackIcon = () => {
    const [isPlaing, setIsPlaing] = useState({ audio: new Audio(sound), play: true });

    useEffect(() => {
        if (isPlaing.play) {
            isPlaing.audio.play()
        } else {
            isPlaing.audio.pause()
        }
        return () => { isPlaing.audio.pause() }
    }, [isPlaing.play])

    const playStopSound = () => {
        setIsPlaing(currentState => { return { ...currentState, play: !currentState.play } })
    }

    return <span className="icon-container" >
        <FontAwesomeIcon className={`svg-icon ${isPlaing.play ? "show-icon" : "hide-icon"}`} icon={faVolumeUp} onClick={playStopSound} />
        <FontAwesomeIcon className={`svg-icon ${isPlaing.play ? "hide-icon" : "show-icon"}`} icon={faVolumeDown} onClick={playStopSound} />
    </span>
}
export default SoundTrackIcon;