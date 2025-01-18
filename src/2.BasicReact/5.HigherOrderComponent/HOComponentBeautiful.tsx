function HOComponentBeautiful(props) {
    const children = props.children;

    return (
        <div style={{
            border: "10px solid red",
            padding: "10px",
            margin: "10px"
        }}>
            {children}
        </div>
    )
}

export default HOComponentBeautiful;