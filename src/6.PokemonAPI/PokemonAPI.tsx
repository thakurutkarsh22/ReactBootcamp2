import { useEffect, useState } from "react";

function PokemonAPI() {


    const [selectedPokemon, setSelectedPokemon] = useState("");
    const [data, setData] = useState({});

    console.log(data, 'data')


    function dropdownChangeHandler(event) {
        console.log(event.target.value)
        setSelectedPokemon(event.target.value);
    }

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + selectedPokemon;

        async function fetchPokemon() {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        }
        fetchPokemon();
        
    }, [selectedPokemon])

    return(
        <>
            <select onChange={dropdownChangeHandler}>
                <option value={"0"}>Select any option</option>
                <option value={"bulbasaur"}>Bulbasaur</option>
                <option value={"ditto"}>Ditto</option>
                <option value={"pikachu"}>Pikachu</option>
            </select>

            <div style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px"
            }}>
                <h1>Pokemon Information</h1>
                <p>Name: {data?.name}</p>

                <p>Height: {data?.height}</p>
                <p>Weight: {data?.weight}</p>
                <p>Abilities: {}</p>
            </div>
        
        </>
    );
}

export default PokemonAPI