import { useEffect, useState } from "react";

function DigitalClock() {


    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("inside the use Effect")

        const intervalId = setInterval(() => {
            console.log("inside the setInterval")
            setTime(new Date().toLocaleTimeString());
        }, 1000);


        return () => {
            clearInterval(intervalId);
        }

    }, []);


    return (
        <div style={{margin: "10px", padding: "10px", border: "1px solid black"}}>
            {console.log("in the uI")}
           <div>CLOCK</div> 
           {time}
        
        </div>
    );

}

export default DigitalClock;