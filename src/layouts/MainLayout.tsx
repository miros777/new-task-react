import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header/HeaderComponent";

const MainLayout = () => {
    return (
        <div className="wrapper">
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;