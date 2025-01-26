import { useRef, useState } from "react";

function UseRefHook() {
    const [counter, setCOunter] = useState(0);


    const ref = useRef(12);
    const {current} = ref;

    function onClickHandler() {
        console.log("-------- prev value", ref.current);
        ref.current += 1;
        console.log("-------- Current value", ref.current);
    }


    return(
        <>
            <h1>use ref hook</h1>
            <div>CURRENT VAL REF: {current}</div>
            <div>COUNTER VAL: {counter}</div>
            <button onClick={() => setCOunter(old => old + 1)}>Counter++</button>
            <br />

            <button onClick={onClickHandler}>++</button>


        </>
    )
}


export default UseRefHook;

// BASIC USE CASE 
/**
 * useRef: is for preservation of the data (just like useState, useReducer) but without re-rendering.
 * 1.  it can store, string,  number, boolean, arrays, objects, function, JSX/HTML elements
 * 
 * 
 * preserve the data through multiple re-renders
 * 
 */

