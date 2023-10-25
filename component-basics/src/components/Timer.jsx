import { useState } from "react";

export default function Timer(props)
{
    const [time, setTime] = useState(props.startTime);

    setTimeout(() =>
    {
        setTime(time + 1);
    }, props.increment);

    return (
        <div>
            <h3>Timer</h3>

            <p>Seconds elapsed: {time}</p>
        </div>
    );
}