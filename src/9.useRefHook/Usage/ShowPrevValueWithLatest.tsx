import { useEffect, useRef, useState } from "react";


function ShowPrevValueWithLatest() {

    const [counter, setCounter] = useState(0);

    const prevRef = useRef('-');

    // FLAVOUR 3, 
    useEffect(()=> {
        prevRef.current = String(counter);
    },[counter])


    // FLAVOUR 1 : can work here but lets not use it
    // useEffect(()=> {
    //     prevRef.current = String(counter);
    // })



    return (
        <>
            <h1>Use ref examples</h1>
            <p>COunter: {counter}</p>

            <p>Prev value: {prevRef.current}</p>



            <button onClick={() => {
                setCounter(old => old + Number((Math.random() * 10).toFixed(0)))
            }}>CLick</button>
        
        </>
    );
}

export default ShowPrevValueWithLatest;