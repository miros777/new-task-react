import React from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";

const Error404Layout = () => {
    return (
        <div>
            <HeaderComponent/>
            <h1>Error 404!</h1>
            <FooterComponent/>
        </div>
    );
};

export default Error404Layout;