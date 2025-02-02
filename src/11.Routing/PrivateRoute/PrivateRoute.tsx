
// HIGHER ORDER COMPOENNT


function PrivateRoute(props) {
    const children = props.children;

    const isAuthenticated = false;

    return (
        <>
            {!isAuthenticated ? <div>Not Authorized</div> : <div>{children}</div>}
        </>
    )
}

export default PrivateRoute;