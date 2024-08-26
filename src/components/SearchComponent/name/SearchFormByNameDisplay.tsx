import React from 'react';
import PocemonInfoComponent from "../../PocemonComponent/PocemonInfoComponent";
import {useLocation} from "react-router-dom";


const SearchFormByNameDisplay = () => {

    const stateLocation = useLocation();
    const pokemon = stateLocation.state.pokemon;

    return (
        <div>
            <PocemonInfoComponent pokemon={pokemon}/>
        </div>
    );
};

export default SearchFormByNameDisplay;