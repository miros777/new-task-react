import {IPokemon} from "./IPokemon";

export interface IPokemons {
    count: number,
    next: string,
    previous: null | number,
    results: IPokemon[]

}
