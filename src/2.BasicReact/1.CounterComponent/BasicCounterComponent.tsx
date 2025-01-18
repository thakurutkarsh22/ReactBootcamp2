import { useState } from "react";

function BasicCounterComponent() {
    console.log("redering BasicCounterComponent")
    let score = 0; // NORMAL VARIABLE cant RE-render on change


    // USE STATE EXAMPLE 1:

    // State variable can re-render on Change
    /*
        setCount (useState) gurantees 2 things 
        1. Update the count variable (state)
        2. Re-render (re-run) BasicCounterComponent(
    */
    const [count, setCount] = useState(10000);


    // USE STATE EXAMPLE 2: 

    function expensiveCalculation() {
        console.log("runnign expensive caluclation")
        let count = 1;
        for(let i=0 ; i<5000000000;i++) {
            count++;
        }
        return count;
    }

    // THIS IS WRONG 
    // const [sunWeight] = useState(expensiveCalculation());

    // THIS IS WRITE : LAZY INITIALIZATION
    const [sunWeight] = useState(() => expensiveCalculation());



    const minusHandler = () => {

        // how to decrement 5 times 
        // WAY 1:
        // setCount(count - 5);

        // way 2: NOT a good way to decrement 5 times 
        // NEVER DO THIS: if your new state is dependent on OLD state then NEVER do this 
        // setCount(count - 1);
        // setCount(count - 1);
        // setCount(count - 1);
        // setCount(count - 1);
        // setCount(count - 1);

        // THIS WILL WORK 
        // If your new state is DEPENDANT on old state use this only 
        setCount((old) => old - 1);
        setCount((old) => old - 1);
        setCount((old) => old - 1);
        setCount((old) => old - 1);
        setCount((old) => old - 1);


    }

    return (
        <div style={{
                display: "flex", 
                flexDirection:"column", 
                gap: "10px", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
            
            <div>{count}</div>

            <div style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center"
            }}>
                <button onClick={minusHandler}>-</button>
                <button onClick={() => {
                    setCount(count + 1);
                }}>+</button>
                <button onClick={() => {
                   setCount(0);
                }}>Reset</button>

            </div>

                <div>
                    SUN WEIGHT
                </div>
            {sunWeight}


        </div>
    );

}

export default BasicCounterComponent;