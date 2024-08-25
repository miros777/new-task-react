import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IPokemon} from "../../models/IPokemon";
import {pokemonService} from "../../services/api.services";
import {IPokemons} from "../../models/IPokemons";
import {IForm} from "../../models/IForm";
import {IPokemonInfo} from "../../models/IPokemonInfo";

type UserSliceType = {
    pokemons: IPokemon[];
    formPokemon: IForm | null,
    pokemon: IPokemonInfo | null
    isLoaded: boolean,
    error: string;
    // pokemon: IPokemon | null;
}
const initialState: UserSliceType = {
    pokemons: [],
    formPokemon: null,
    pokemon: null,
    isLoaded: false,
    error: '',
    // pokemon: null

};

let loadPokemons = createAsyncThunk('pokemonSlice/loadPokemons', async (_, thunkAPI) => {
    try {
        let pokemons = await pokemonService.getAll()
        .then(res=> res.results);

        return thunkAPI.fulfillWithValue(pokemons);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

let loadFormsPokemon = createAsyncThunk('pokemonFormSlice/loadForm', async (url:string, thunkAPI) => {
    try {
        let formPokemon = await pokemonService.getForm(url);
        return thunkAPI.fulfillWithValue(formPokemon);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

let loadPokemonInfo = createAsyncThunk('pokemonSlice/loadUsers', async (name: string, thunkAPI) => {
    try {
        let pokemon = await pokemonService.getOnePokemonByName(name);
        return thunkAPI.fulfillWithValue(pokemon);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(
                loadPokemons.fulfilled,
                (state, action) => {
                    state.pokemons = action.payload;
                    state.isLoaded = true;
                })
            .addCase(
                loadFormsPokemon.fulfilled,
                (state, action) => {
                    state.formPokemon = action.payload;
                    state.isLoaded = true;
                })
            .addCase(
                loadPokemonInfo.fulfilled,
                (state, action) => {
                    state.pokemon = action.payload;
                    state.isLoaded = true;
                })
            .addMatcher(
                isRejected(loadPokemons, loadFormsPokemon, loadPokemonInfo),
                (state, action) => {
                    state.error = action.payload as string;
                })

});

export const pokemonAction = {
    ...pokemonSlice.actions,
    loadPokemons,
    loadFormsPokemon,
    loadPokemonInfo
}