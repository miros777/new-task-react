import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";
import {pokemonAction} from "../redax/slices/pokemonSlice";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import PokemonComponent from "../components/PocemonComponent/PokemonComponent";
import {useSearchParams} from "react-router-dom";


const HomePage = () => {

    const dispatch = useAppDispatch();
    const pokemons = useAppSelector(state => state.pokemonStore.pokemons);

    let [query] = useSearchParams({offset: '0'});

    useEffect(() => {
    const currentOffset = query.get('offset') || '0';
        dispatch(pokemonAction.loadPokemons(currentOffset));
    }, [query]);


    return (
        <div>
            <h1>All Pokemons</h1>
            <div className="wrapper d-flex f-wrap j-c-center">
                {
                    pokemons.map((pokemon, i) =>
                        <PokemonComponent key={i} pokemon={pokemon}/>
                    )
                }
            </div>

            <PaginationComponent/>
        </div>
    );
};

export default HomePage;