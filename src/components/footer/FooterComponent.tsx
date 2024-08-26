import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../logo.jpg';
const FooterComponent = () => {

    return (
        <footer className="footer">
            <ul className="topMenu d-flex j-c-center f-column j-c-center j-c-space-around">
                <li className="homeUrl"><Link to={"/"}><img src={logo} alt=""/></Link></li>
            </ul>
        </footer>
    );
};

export default FooterComponent;