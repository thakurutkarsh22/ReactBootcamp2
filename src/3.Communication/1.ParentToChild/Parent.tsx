import Child from "./Child";

function Parent() {
    const pi = 3.14;

    return (
        <div style={{border: "1px solid blue", padding: "10px"}}>
            <h1>Parent</h1>
            <Child pi={pi} />
        
        </div>
    )

}

export default Parent;

// From Parent to child we communicate through PROPS