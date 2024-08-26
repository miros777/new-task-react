import axios, {AxiosResponse} from "axios";
import {IPokemons} from "../models/IPokemons";
import {IPokemonInfo} from "../models/IPokemonInfo";
import {IForm} from "../models/IForm";
import {PokemonPaginatioModel} from "../models/PokemonPaginatioModel";
import {IAbilitySearchModel} from "../models/IAbilitySearchModel";
import {ITypeSearchModel} from "../models/ITypeSearchModel";

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
    getAllByType: async (nameOfType:string ):Promise<ITypeSearchModel> =>{
        const response = await axiosInstans.get<ITypeSearchModel>('https://pokeapi.co/api/v2/type/' + nameOfType)
        return response.data;
    },
    getAllByAbility: async (name:string ):Promise<IAbilitySearchModel> =>{
        const response = await axiosInstans.get<IAbilitySearchModel>('https://pokeapi.co/api/v2/ability/' + name)
        return response.data;
    },
    getAllByName: async (name:string):Promise<IPokemonInfo> =>{
        const response = await axiosInstans.get<IPokemonInfo>(baseUrl + "/pokemon/" + name)
        return response.data;
    }
}
export {
    pokemonService,
    pokemonApiSearch
}