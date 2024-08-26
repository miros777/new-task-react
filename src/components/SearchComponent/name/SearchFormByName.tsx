import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {wordValidator} from "../../../validators/word.validator";
import {useNavigate} from "react-router-dom";
import {pokemonApiSearch} from "../../../services/api.services";
import {AxiosError} from "axios";


type FormProps = {
    searchword: string
}
const SearchFormByName = () => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm<FormProps>({
        mode: "all",
        resolver: joiResolver(wordValidator)
    });
    const navigate = useNavigate();
    const customHandler = async (formData: FormProps) => {
        try {
            let pokemon = await pokemonApiSearch.getAllByName(formData.searchword)
                .then(v => v);
            navigate('search_name/', {state: {pokemon: pokemon}});
        } catch (e) {
            const error = e as AxiosError;
            // console.log(error.message);
            navigate('search_name/error');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(customHandler)} className="d-flex">
                <label className="d-flex f-column">
                    <input placeholder={"search any name..."} type="text"  {...register('searchword')}/>
                    <span>{errors.searchword && errors.searchword.message}</span>
                </label>

                <button disabled={!isValid}>send</button>
            </form>

        </>
    );
};

export default SearchFormByName;