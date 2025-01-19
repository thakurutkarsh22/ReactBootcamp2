import { useState } from "react";
import MountingUnmountingChild from "./MountingUnmountingChild";

function MountingUnmountingParent() {

    const [toggle, setTOggle] = useState(false);

    return (
        <>
            <h1>Parent</h1>
            {toggle ? <MountingUnmountingChild /> : null}

            <button 
                onClick={() => {setTOggle(old => !old)}}>
                Toggle
            </button>
            
        </>
    )
}

export default MountingUnmountingParent;