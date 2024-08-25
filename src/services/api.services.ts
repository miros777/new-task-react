import axios, {AxiosResponse} from "axios";
import {IPokemons} from "../models/IPokemons";
import {IPokemonInfo} from "../models/IPokemonInfo";
import {IForm} from "../models/IForm";
import {PokemonPaginatioModel} from "../models/PokemonPaginatioModel";

const baseUrl = "https://pokeapi.co/api/v2";

const axiosInstans  = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const pokemonService = {
    getAll: async (offset:string = '0'):Promise<IPokemons> =>{
        const response = await axiosInstans.get<IPokemons>(baseUrl + "/pokemon/", {
            params:{
                offset: offset,
                limit: '20'
            }})
        return response.data;
    },

    getPaginationInfo: async (offset:string = '0'):Promise<PokemonPaginatioModel> =>{
        const response = await axiosInstans.get<PokemonPaginatioModel>(baseUrl + "/pokemon/", {
            params: {
                offset: offset,
                limit: '20'
            }})
        return response.data;
    },

    getOnePokemonByName: async (name:string):Promise<IPokemonInfo> =>{
        const response = await axiosInstans.get<IPokemonInfo>(baseUrl + "/pokemon/" + name)
        return response.data;
    },

    getForm: async (url:string):Promise<IForm> =>{
        const response = await axiosInstans.get<IForm>(url)
        return response.data;
    },

};

const pokemonApiSearch = {
    getAllByType: async (name:string ):Promise<IPokemons> =>{
        const response = await axiosInstans.get<IPokemons>('https://pokeapi.co/api/v2/type/' + name)
        return response.data;
    },

}
export {
    pokemonService,
    pokemonApiSearch
}