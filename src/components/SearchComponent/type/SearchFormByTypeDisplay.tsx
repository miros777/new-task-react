import React from 'react';
import {useLocation} from "react-router-dom";
import PokemonComponentAbillities from "../../PocemonComponent/PokemonComponentAbillities";
import {ITypeSearchModel} from "../../../models/ITypeSearchModel";


const SearchFormByTypeDisplay = () => {

    const stateLocation = useLocation();
    const pokemons = stateLocation?.state?.pokemon;

    return (
        <div className="wrapper d-flex f-wrap j-c-center">
            {
                pokemons.pokemon.map( (pok:ITypeSearchModel, i:number)=>
                    <PokemonComponentAbillities pokemon={pok.pokemon} key={i}/>
                )
            }
        </div>
    );
};

export default SearchFormByTypeDisplay;