import { useReducer } from "react";

const DEFAULT_STATE = {
    name: "utkarsh",
    counter: 0,
    age: 25
}

function reducerFunction(state: any, action: any) {
    const {type} = action;

    if(type === "INCREMENT") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    } else if (type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1,
        }
    } else {
        return state;
    }
}

const IncrementActionObj = {
    type: "INCREMENT"
}

const DecrementActionObj = {
    type: "DECREMENT"
}


function UseReducerCOunter() {
    const [state, dispatch] = useReducer(reducerFunction, DEFAULT_STATE);
    const {name, counter, age} = state;
    
    return (
        <>
            <h1>Reducer Counter</h1>
            <p>NAME: {name}</p>
            <p>Counter: {counter}</p>

            <button onClick={() => {dispatch(IncrementActionObj)}}>+</button>

            <button onClick={() => {dispatch(DecrementActionObj)}}>-</button>

        </>
    )
}

export default UseReducerCOunter;