function Child(props) {
    const {pi} = props;

    return(
        <div style={{border: "2px solid black"}}>
            <h1>Child</h1>
            <p>Value of pi {pi}</p>
        </div>
    )

}

export default Child;