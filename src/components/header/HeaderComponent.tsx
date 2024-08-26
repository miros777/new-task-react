import React from 'react';
import {Link} from "react-router-dom";
import SearchFormByName from "../SearchComponent/name/SearchFormByName";
import SearchFormByAbillity from "../SearchComponent/abillity/SearchFormByAbillity";
import SearchFormByType from "../SearchComponent/type/SearchFormByType";
import logo from '../../logo.jpg';
const HeaderComponent = () => {

    return (
        <header className="headerTop">
            <ul className="topMenu d-flex j-c-center f-column j-c-center j-c-space-around">
                <li className="homeUrl"><Link to={"/"}><img src={logo} alt=""/></Link></li>
                <ul>
                    <li><SearchFormByName/></li>
                    <li><SearchFormByAbillity/></li>
                    <li><SearchFormByType/></li>
                </ul>
            </ul>
        </header>
    );
};

export default HeaderComponent;