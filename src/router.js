import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import MainLayout from "./layouts/MainLayout.jsx";
import ProductView from "./views/ProductView.jsx";
import NotFound from "./views/NotFound.jsx";
import RegisterView from "./views/RegisterView.jsx"
import UserProfileView from "./views/UserProfileView.jsx";
import EditProfileView from "./views/EditProfileView.jsx";

const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: HomeView,
            },
            {
                path: '/iniciar-sesion',
                Component: LoginView,
            },
            {
                path: '/producto/:name',
                Component: ProductView,
            },
            {
                path: '/registrarse',
                Component: RegisterView,
            },
            {
                path: '/not-found',
                Component: NotFound,
            },
            {
                path: '/perfil',
                Component: UserProfileView,
            },
            {
                path: '/editar-perfil',
                Component: EditProfileView,
            },
        ]
    }
])

export default router;

/*
* React Router DATA mode documentation
* https://reactrouter.com/start/data/installation
* */