import { useState } from "react";

function ConditionalRendering() {

    const [isDay, setIsDay] = useState(0);
    console.log('is day', isDay);


    return (
        <div>
            <h1>Conditional Redering</h1>

            {/* Short Circuting (I WOULD NOT TO USE THIS) */ }
            {isDay && <div>day short circuit</div>}

            {/* TERNARY IF ELSE  (I would use this) */}
            {/* {isDay ? <div>day ternary </div> : null} */}


            <button onClick={() => {
                setIsDay(old => {
                    if(old === 0) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }}>
                flip 
            </button>



        </div>
    )
}

export default ConditionalRendering;