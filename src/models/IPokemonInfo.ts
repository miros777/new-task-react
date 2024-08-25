import {IStatus} from "./IStatus";
import {IAbilities} from "./IAbilities";
import {ITypesPokemon} from "./ITypesPokemon";
import {ISprites} from "./ISprites";

export interface IPokemonInfo {
    abilities: IAbilities[],
    forms: [
        {
            name: string,
            url: string
        }
    ],
    id: number,
    name: string,
    past_abilities: [],
    sprites: ISprites,
    stats: IStatus[],
    types: ITypesPokemon[]
}