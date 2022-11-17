import "./Tune.css";
import tuneSource from "../../../Assets/Audio/the-desert.wav"
import { RefObject, useRef } from "react";

function Tune(): JSX.Element {
    const audioRef: RefObject<HTMLAudioElement> = useRef(null);
    return (
        <div className="Tune Box">
			<audio src={tuneSource} ref={audioRef} />
            <button onClick={() => audioRef.current?.play()}>play</button>
            <button onClick={() => audioRef.current?.pause()}>pause</button>
            <button onClick={() => audioRef.current?.load()}>stop</button>
        </div>
    );
}

export default Tune;
