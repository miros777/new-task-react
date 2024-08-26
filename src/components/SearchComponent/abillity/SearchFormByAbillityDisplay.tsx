import React from 'react';
import {useLocation} from "react-router-dom";
import PokemonComponentAbillities from "../../PocemonComponent/PokemonComponentAbillities";
import {IAbilitySearchModel} from "../../../models/IAbilitySearchModel";

const SearchFormByAbillityDisplay = () => {

    const stateLocation = useLocation();
    const pokemons = stateLocation?.state?.pokemon;

    return (
        <div className="wrapper d-flex f-wrap j-c-center">
            {
                pokemons.pokemon.map( (pokemon:IAbilitySearchModel, i:number)=>
                    <PokemonComponentAbillities pokemon={pokemon.pokemon} key={i}/>
                )
            }
        </div>
    );
};

export default SearchFormByAbillityDisplay;