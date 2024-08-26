import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redax/store";
import {pokemonAction} from "../redax/slices/pokemonSlice";
import {useLocation} from "react-router-dom";
import FormsComponent from "../components/PocemonComponent/FormsComponent";

const PokemonFormsPage = () => {

    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)
    const query = queryParameters.get("forms")

    const dispatch = useAppDispatch();
    const pokemonForm = useAppSelector(state => state.pokemonStore.formPokemon);

    useEffect(() => {
        if (query) {
            dispatch(pokemonAction.loadFormsPokemon(query));
        }
    }, [query]);

    return (
        <div>
            <h1>Form page</h1>
            <FormsComponent dataForm={pokemonForm}/>
        </div>
    );
};

export default PokemonFormsPage;