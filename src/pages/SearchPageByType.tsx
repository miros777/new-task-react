import React from 'react';
import SearchFormByNameDisplay from "../components/SearchComponent/name/SearchFormByNameDisplay";
import SearchFormByType from "../components/SearchComponent/type/SearchFormByType";
import SearchFormByTypeDisplay from "../components/SearchComponent/type/SearchFormByTypeDisplay";

const SearchPageByType = () => {

    return (
        <>
            <h1>Pokemons By type</h1>
            <SearchFormByTypeDisplay/>
        </>
    );
};

export default SearchPageByType;