import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IPokemon} from "../../models/IPokemon";
import {pokemonService} from "../../services/api.services";

type UserSliceType = {
    pokemons: IPokemon[];
    isLoaded: boolean,
    error: string;
    pokemon: IPokemon | null;
}
const initialState: UserSliceType = {
    pokemons: [],
    isLoaded: false,
    error: '',
    pokemon: null

};

let loadPokemons = createAsyncThunk('pokemonSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let pokemons = await pokemonService.getAll();
        return thunkAPI.fulfillWithValue(pokemons);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

// let loadUser = createAsyncThunk('userSlice/loadUser',
//     async (id: number, thunkAPI) => {
//         try {
//             let user = await userService.getById(id);
//             return thunkAPI.fulfillWithValue(user);
//         } catch (e) {
//             let error = e as AxiosError;
//             return thunkAPI.rejectWithValue(error?.response?.data);
//         }
//     });


export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: initialState,
    reducers: {
        // // fillUser: (state, action) => {
        // //     state.pokemons = action.payload;
        // // },
        // // refillUsers: (state, action) => {
        // //     state.pokemons = action.payload;
        // }
    },
    extraReducers: builder =>
    builder
        .addCase(
            loadPokemons.fulfilled,
            (state, action) => {
                state.pokemons = action.payload;
                state.isLoaded = true;
            })
        .addMatcher(
            isRejected(loadPokemons),
            (state, action) => {
                state.error = action.payload as string;
            })

});

export const pokemonAction = {
    ...pokemonSlice.actions,
    loadPokemons,

}