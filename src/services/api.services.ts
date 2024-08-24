import axios from "axios";
import {IPokemon} from "../models/IPokemon";

const baseUrl = "https://pokeapi.co/api/v2";

const axiosInstans  = axios.create({
    baseURL: baseUrl,
    headers: {

    }
});

const pokemonService = {
    getAll: async () =>{
        let response = await axiosInstans.get<IPokemon[]>("/pokemon");
        return response.data;
    },

}
export {
    pokemonService,

}