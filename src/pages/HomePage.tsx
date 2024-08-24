import React from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";

const HomePage = () => {
    const dispatch = useAppDispatch();
    let pokemons = useAppSelector(state => state.pokemonStore.pokemons);
    console.log(pokemons);


    return (
        <div>
            
        </div>
    );
};

export default HomePage;