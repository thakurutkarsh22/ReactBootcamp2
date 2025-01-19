function Child(props) {
    const {pi, childCommunicator} = props;

    return(
        <div style={{border: "2px solid black"}}>
            <h1>Child</h1>
            <p>Value of pi {pi}</p>
            <button onClick={() => {childCommunicator("hey no electricity")}}>Emergency</button>
        </div>
    )

}

export default Child;