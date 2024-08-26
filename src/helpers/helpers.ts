export const getImagePokemon = (id:number)=>{
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'
}
export const urlSlice = (urlCustom:string, paramSlice:string):string => {
    const path = urlCustom.split(paramSlice);
    const newPath = path[1].split('/');
    const idPokemon = +newPath[0];
    return getImagePokemon(idPokemon);
}