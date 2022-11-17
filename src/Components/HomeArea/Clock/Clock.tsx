import { useEffect, useState } from "react";
import DayPartIcon from "../../SharedArea/DayPartIcon/DayPartIcon";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState<string>("time..");

    useEffect(()=>{

        const timerId = setInterval(() => {
            const now = new Date();
            const currentTime = now.toLocaleTimeString();
            setTime(currentTime);
            // console.log("test");
            }, 1000);

            // will be invoked when component destroyed:
            return () => clearInterval(timerId);

    },[]);



    return (
        <div className="Clock Box">
			<span>{time}</span>
            <DayPartIcon hour={new Date().getHours()} />

        </div>
    );
}

export default Clock;
