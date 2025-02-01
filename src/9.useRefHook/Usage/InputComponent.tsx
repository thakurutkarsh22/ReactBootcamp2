import { useEffect, useRef } from "react";

function InputComponent(props) {

    const ref = useRef(null)

    const {label} = props

    useEffect(() => {
        const inputbox = ref.current;
        inputbox.focus();
    })


    return (
        <>
            <label>{label}</label>
            <input 
                ref={ref}
                type="text"
                placeholder="name here"
            />
        
        </>

    );
}

export default InputComponent;

// autofocus : autoFocus, ref