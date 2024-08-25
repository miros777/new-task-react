import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redax/store";
import PocemonInfoComponent from "../components/PocemonComponent/PocemonInfoComponent";
import {pokemonAction} from "../redax/slices/pokemonSlice";


const PokemonPage = () => {

    let {name} = useParams();

    const dispatch = useAppDispatch();
    const pokemon = useAppSelector(state => state.pokemonStore.pokemon);

    useEffect(() => {
        if(name){
            dispatch(pokemonAction.loadPokemonInfo(name));
        }
    }, [name]);


    return (
        <div className="infoPocemon">
            <PocemonInfoComponent pokemon={pokemon}/>
        </div>
    );
};

export default PokemonPage;