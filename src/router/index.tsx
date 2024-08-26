import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PokemonPage from "../pages/PokemonPage";
import PokemonFormsPage from "../pages/PokemonFormsPage";
import SearchFormByNameDisplay from "../components/SearchComponent/name/SearchFormByNameDisplay";
import SearchPage from "../pages/SearchPageByName";
import Error404Layout from "../layouts/Error404Layout";
import ErrorSearch404Layout from "../layouts/ErrorSearch404Layout";
import SearchPageByName from "../pages/SearchPageByName";
import SearchFormByAbillity from "../components/SearchComponent/abillity/SearchFormByAbillity";
import SearchPageByAbillity from "../pages/SearchPageByAbillity";
import SearchPageByType from "../pages/SearchPageByType";

export let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error404Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'pokemon/:name', element: <PokemonPage/>},
            {path: 'pokemon/:name/forms', element: <PokemonFormsPage/>},
            {path: 'search_name', element: <SearchPageByName/>},
            {path: 'search_name/error', element: <ErrorSearch404Layout/>},
            {path: 'search_abillity', element: <SearchPageByAbillity/>},
            {path: 'search_abillity/error', element: <ErrorSearch404Layout/>},
            {path: 'search_type', element: <SearchPageByType/>},
            {path: 'search_type/error', element: <ErrorSearch404Layout/>},
        ]
    }
]);