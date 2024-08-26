import React, {FC} from 'react';
import {IPokemon} from "../../models/IPokemon";
import {Link} from "react-router-dom";
import {urlSlice} from "../../helpers/helpers";

type IProps = {
    pokemon: IPokemon,
}
const PokemonComponent: FC<IProps> = ({pokemon}) => {
    const urlPokemon = pokemon.url;
    const img = urlSlice(urlPokemon, 'pokemon/');

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