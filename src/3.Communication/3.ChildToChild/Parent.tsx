import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

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
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                <Child1 pi={pi} childCommunicator={childCommunicatorHandler} />
                <Child2 child1Problem={childProblem} pi={pi} childCommunicator={childCommunicatorHandler} />
            </div>
        </div>
    )

}

export default Parent;

// From Parent to child we communicate through PROPS