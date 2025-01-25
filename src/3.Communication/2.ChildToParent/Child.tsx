type ChildProp = {
    pi: number,
    childCommunicator: (x: string) => void
}

function Child(props: ChildProp) {
    const {pi, childCommunicator} = props;

    return(
        <div style={{border: "2px solid black"}}>
            <h1>Child</h1>
            <p>Value of pi {pi}</p>
            <button onClick={() => {childCommunicator("12")}}>Emergency</button>
        </div>
    )
}



export default Child;