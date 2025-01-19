import { useEffect, useState } from "react";

function UseEffectPhases() {
    console.log("Top of the function")

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const [phase, setPhase] = useState("MOUNTING PHASE")

    console.log("PHASE :: ",  phase)


    // 3 Flavours of use Effect

    // 1. --  FLAVOUR 1: no Dependency Array:  MOUNTING,  UPDATE, UNMOUNTING

    /**
     *  WE USE THIS VERY RARELY 
     *  NEVER INSIDE FLAVOUR 1 never set State,  i.e, setState(setData)
     * 
     * ANY upate that happens to the component this Flavour1 will ALWAYS run
     */

    // useEffect(() => {
    //     console.log("In the use Effect Flavour1 :: working in ::: ", phase)
        
    //     // setCounter2(old => old + 1);
    //     // setPhase("UPDATE PHASE")

    //     return () => {
    //         // Unmouning phase
    //         console.log("unmount Flavour1")
    //     }
    // })

    // 2. --  FLAVOUR 2: It has Blank Dependency Array: MOUNTING and UNMOUNTING


    // useEffect(() => {
    //     console.log("In the use Effect Flavour2 :: working in ::: ", phase)
    //     return () => {
    //         // Unmouning phase
    //         // CLEANUP
    //         // timing (clearTimeout, clearInterval, making some values null etc)
    //         console.log("unmount Flavour2")
    //     }
    // }, []);


    // 3. --- FLAVOUR 3: it has filled Dependency Array: MOUNTING, SELECTIVELY work in UPDATE, and UNMOUNTING

    // useEffect(() => {
    //     console.log("In the use Effect Flavour3 :: working in ::: ", phase)
        // return () => {
        //  // Unmouning phase
        //     console.log("unmount Flavour2")
        // }
    // }, [phase]);

    return (
        <>
            {console.log("IN THE UI")}
            <h1>Use effect </h1>
            <p>Counter 1: {counter1}</p>
            <p>Counter 2: {counter2}</p>


            <button onClick={() => {
                setCounter1(old => old + 1);
                setPhase("UPDATE PHASE")
            }}>
                + plus Counter1
            </button>

            <button onClick={() => {
                setCounter2(old => old + 1);
                setPhase("UPDATE PHASE")
            }}>
                + plus Counter2
            </button>


        </>
    )



}

export default UseEffectPhases;