
import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IPokemon} from "../../models/IPokemon";
import {pokemonService} from "../../services/api.services";
import {IPokemons} from "../../models/IPokemons";

type PaginationSliceType = {
    count: number,
    next: string,
    previous: null,
    error: string;
}
const initialState: PaginationSliceType = {
    count: 0,
    next: "",
    previous: null,
    error: ""
};

let loadInfoPafinations = createAsyncThunk('pokemonSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let infoPagination = await pokemonService.getPaginationInfo(1,20);
            // .then(resronce=> resronce);
        return thunkAPI.fulfillWithValue(infoPagination);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

export const paginationSlice = createSlice({
    name: "paginationSlice",
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
                loadInfoPafinations.fulfilled,
                (state, action) => {
                    // state.infoPagination = action.payload;
                })
            .addMatcher(
                isRejected(loadInfoPafinations),
                (state, action) => {
                    state.error = action.payload as string;
                })

});

export const pokemonAction = {
    ...paginationSlice.actions,
    loadInfoPafinations,

}
