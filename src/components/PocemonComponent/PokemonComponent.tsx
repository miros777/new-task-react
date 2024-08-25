import React, {FC, useEffect} from 'react';
import {IPokemon} from "../../models/IPokemon";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redax/store";
import {pokemonAction} from "../../redax/slices/pokemonSlice";

type IProps = {
    pokemon: IPokemon,
}
const PokemonComponent: FC<IProps> = ({pokemon}) => {

    const dispatch = useAppDispatch();
    const photos = useAppSelector(state => state.pokemonStore.pokemon);

    useEffect(() => {
        if (pokemon.name) {
            dispatch(pokemonAction.loadPokemonInfo(pokemon.name));
        }
    }, []);


    return (<div className="cardPokemon">
            <Link to={`pokemon/${pokemon.name}`}>
                <h3>{pokemon.name}</h3>
                <div className="cardPhotos">
                    <div><img src={photos?.sprites.back_default} alt=""/></div>
                    <div><img src={photos?.sprites.back_female} alt=""/></div>
                    <div><img src={photos?.sprites.back_shiny} alt=""/></div>
                    <div><img src={photos?.sprites.back_shiny_female} alt=""/></div>
                    <div><img src={photos?.sprites.front_default} alt=""/></div>
                    <div><img src={photos?.sprites.front_shiny} alt=""/></div>
                    <div><img src={photos?.sprites.front_female} alt=""/></div>
                    <div><img src={photos?.sprites.front_shiny_female} alt=""/></div>
                </div>
            </Link>
        </div>
    );
};

export default PokemonComponent;