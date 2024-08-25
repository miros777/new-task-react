import React, {FC} from 'react';
import {IPokemon} from "../../models/IPokemon";
import {Link} from "react-router-dom";
import {getImagePokemon} from "../../helpers/helpers";

type IProps = {
    pokemon: IPokemon,
}
const PokemonComponent:FC<IProps> = ({pokemon}) => {
    const path = pokemon.url.split('pokemon/');
    const newPath = path[1].split('/');
    const idPokemon = +newPath[0];

    const img = getImagePokemon(idPokemon);

    return (<div className="cardPokemon">
            <Link to={`pokemon/${pokemon.name}`}>
                <h3>{pokemon.name}</h3>
                <div className="cardPhotos">
                    <img src={img} alt=""/>
                </div>
            </Link>
        </div>
    );
};

export default PokemonComponent;