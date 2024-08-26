import React, {FC} from 'react';
import {urlSlice} from "../../helpers/helpers";
import {Link} from "react-router-dom";

type IProps = {
    pokemon: {
        name: string,
        url: string
    }
}
const PokemonComponentAbillities: FC<any> = ({pokemon}:IProps) => {

    const urlPokemon = pokemon.url;
    const img = urlSlice(urlPokemon, 'pokemon/');

    return (
        <>
            {
                <div className="cardPokemon">
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <h3>{pokemon.name}</h3>
                        <div><img src={img} alt="{pokemon.name}"/></div>
                    </Link>
                </div>
            }
        </>
    );
};

export default PokemonComponentAbillities;