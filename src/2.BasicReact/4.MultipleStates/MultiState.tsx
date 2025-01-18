import { useState } from "react";

function MultiState() {

    const [name] = useState("utkarsh");
    const [counter, setCounter] = useState(0);
    const [isDay, setIsDay] = useState(true);

    return (
        <>
            <h1>Multistate</h1>
            <p>{name}</p>
            <p>{counter}</p>
            <p>{isDay ? <p>day</p> : <p>night</p>}</p>

            <button onClick={() => {
                setCounter(old => old + 1);
                setIsDay(old => !old)
            }} >
                click me 
            </button> 
        </>
    );




}

export default MultiState;