import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PokemonPage from "../pages/PokemonPage";
import FormCharacterPage from "../pages/FormCharacterPage";

export let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>404 error!</h1>,
        children: [
            {index: true, element: <HomePage/>},
            // {path: 'users', element: <UsersPage/>},
            // {path: 'posts', element: <PostsPage/>},
            {path: ':id', element: <PokemonPage/>},
            {path: 'form/:id', element: <FormCharacterPage/>},
        ]
    }
]);