export const getImagePokemon = (id:number)=>{
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'
}

//use if you want get ID From url where ID in the end/ Exam: http:assd/pokemon/id/
export const urlSlice = (urlCustom:string, paramSlice:string):string => {
    const path = urlCustom.split(paramSlice);
    const newPath = path[1].split('/');
    const idPokemon = +newPath[0];
    return getImagePokemon(idPokemon);
}