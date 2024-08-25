import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";
import {pokemonAction} from "../redax/slices/pokemonSlice";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";
import {pokemonService} from "../services/api.services";
import PokemonComponent from "../components/PocemonComponent/PokemonComponent";


type IProps = {
    searchParams: {
        offset?: string
    }
}
const HomePage = () => {

    const dispatch = useAppDispatch();
    const pokemons = useAppSelector(state => state.pokemonStore.pokemons);

    useEffect(() => {
        dispatch(pokemonAction.loadPokemons());
    }, []);

    // const page = searchParams['offset'] ?? '1'
    // const pagInfo = await pokemonService.getPaginationInfo(1,20);
    //
    // const start = (Number(page) - 1);
    // const end = 0;

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
        </div>
    );
};

export default HomePage;