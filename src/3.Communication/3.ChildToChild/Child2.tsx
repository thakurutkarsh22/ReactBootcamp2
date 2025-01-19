function Child2(props) {
    const {pi, child1Problem} = props;

    return(
        <div style={{border: "2px solid black"}}>
            <h1>Child2</h1>
            <p>Value of pi {pi}</p>
            <p>Child 1 problem:  {child1Problem}</p>
        </div>
    )

}

export default Child2;