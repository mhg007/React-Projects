import React from "react";

const PokemonList = ({pokemon}) => {
    return(
        <>
            {pokemon.map(p=>(
                <div>{p}</div>
            ))}
        </>
    )
}
export default PokemonList;