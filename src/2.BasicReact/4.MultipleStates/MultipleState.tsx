import { useState } from "react";

function MultipleState() {
    const [state, setState] = useState({
        counter: 0,
        name: "utkarsh",
        isDay: true
    });

    const {counter, isDay, name} = state;

    return (
        <>
        <h1>Multistate</h1>
        <p>{name}</p>
        <p>{counter}</p>
        <p>{isDay ? <p>day</p> : <p>night</p>}</p>

        <button onClick={() => {
           setState(oldState => {
            return {
                ...oldState,
                
                counter: oldState.counter + 1,
                isDay: !oldState.isDay 
            }
           })
        
        
        }} >
            click me 
        </button> 
    </>
    );
}

export default MultipleState;