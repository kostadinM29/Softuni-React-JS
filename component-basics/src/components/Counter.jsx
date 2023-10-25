import { React, useState } from 'react'

export default function Counter(props)
{
    const [counter, setCounter] = useState(props.start);

    //increase counter
    const increase = () =>
    {
        setCounter(counter + props.increment);
    };

    //decrease counter
    const decrease = () =>
    {
        setCounter(counter - props.increment);
    };

    //reset counter 
    const reset = () =>
    {
        setCounter(props.start)
    }

    if (counter < 0)
    {
        return (
            <div>
                <h1>Negative Counter!</h1>
                <span>{counter}</span>
                <div >
                    <button onClick={increase}>+</button>
                    <button onClick={decrease}>-</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Positive Counter</h1>
            <span>{counter}</span>
            <div >
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}