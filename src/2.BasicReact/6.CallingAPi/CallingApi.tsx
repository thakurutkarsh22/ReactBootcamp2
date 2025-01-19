import { useEffect, useState } from "react";

function CallingApi() {
    console.log("calling api reder")

    // const data = [] // normal variable

    const [pokemonData, setdata] = useState(null);

    // calling API here will make INFINITE rerendring
    // const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    // fetch(url).then(response => response.json()).then(data => setdata(data) );


    // useEffect gurantees that it will work After the UI is RENDEREND
    useEffect(() => {
        console.log("inside the useEffect")
        
        const url = "https://pokeapi.co/api/v2/pokemon/ditto";
        fetch(url).then(response => response.json()).then(data => setdata(data) );
    }, [])



    console.log(pokemonData, 'pokemon data')



    // UI redering
    return (
        <>
            {console.log("UI rendering")}
            <h1>Pokemon</h1>
            <p>pokemon detail</p>
            <p>Name: {pokemonData ? pokemonData.name : null}</p>

        </>
        
    )

}

export default CallingApi;


// 2. useEffect -> allows us to do side effect in our component, 
    // side effect -> calling API, calling localstorage, adding and removing event listners.