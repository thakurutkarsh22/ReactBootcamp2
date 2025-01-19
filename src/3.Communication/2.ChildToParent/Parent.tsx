import { useState } from "react";
import Child from "./Child";

function Parent() {
    const pi = 3.14;
    // let childProblem = "";
    const [childProblem, setChildProblem] = useState("");


    function childCommunicatorHandler(data) {
        console.log(data, 'child data')
        // childProblem = data;
        setChildProblem(data);
    }

    return (
        <div style={{border: "1px solid blue", padding: "10px"}}>
            <h1>Parent</h1>
            <p>DIsplay child problem: {childProblem}</p>
            <Child pi={pi} childCommunicator={childCommunicatorHandler} />
        </div>
    )

}

export default Parent;

// From Parent to child we communicate through PROPS