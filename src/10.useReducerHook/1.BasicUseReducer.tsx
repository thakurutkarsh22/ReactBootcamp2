import { useReducer, useState } from "react";

function BasicUseReducer() {

    
}

export default BasicUseReducer;


// const [state, dispatch] = useReducer(reducerFunctoin, DefaultValue  );

// const [state, setState] = useState(defaultValue);



/**
 * 
 * Like use State useReducer is also used for component STATE Management
 * 
 * 
 * 
 * 1. Reducer Function: this need to be a pure function, this function is ULTIMATELy responsible for state change
 * 
 * 2. Action objects: Action object is an object with intent. 
 * actionObject = {
 *  type: "counter"
 * }
 * 
 * 3. Dispatch: actionObject will be transported from this layer.
 * Dispatch primarily works to deliver the action object to the reducer function 
 * 
 * 
 * 
 */