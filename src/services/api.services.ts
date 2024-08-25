import axios from "axios";
import {IPokemon} from "../models/IPokemon";
import {IPokemons} from "../models/IPokemons";
import {IPokemonInfo} from "../models/IPokemonInfo";
import {IForm} from "../models/IForm";

const baseUrl = "https://pokeapi.co/api/v2";

const axiosInstans  = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const pokemonService = {
    getAll: async ():Promise<IPokemons> =>{
        let response = await axiosInstans.get<IPokemons>(baseUrl + "/pokemon")
        return response.data;
    },

    getPaginationInfo: async (offset:number, limit:number):Promise<IPokemons> =>{
        let response = await axiosInstans.get<IPokemons>(baseUrl + "/pokemon/?offset=" + offset + "&limit=" + limit)
        return response.data;
    },

    getOnePokemonByName: async (name:string):Promise<IPokemonInfo> =>{
        let response = await axiosInstans.get<IPokemonInfo>(baseUrl + "/pokemon/" + name)
        return response.data;
    },
    getForm: async (url:string):Promise<IForm> =>{
        let response = await axiosInstans.get<IForm>(url)
        return response.data;
    },

}
export {
    pokemonService,
}