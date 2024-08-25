import {IPokemon} from "./IPokemon";
import {ISprites} from "./ISprites";
import {ITypesPokemon} from "./ITypesPokemon";

export interface IForm {
    form_order: number,
    id: number,
    is_battle_only: boolean,
    is_default: boolean,
    is_mega: boolean,
    name: string,
    order: number,
    pokemon: {
        name: IPokemon
    },
    sprites: ISprites,
    types: ITypesPokemon[]
}