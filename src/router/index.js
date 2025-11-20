import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';

// LAYOUTS
import GuessLayout from "../layouts/GuessLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

// MIDDLEWARES
import {authMiddleware} from './middleware/auth.middleware.js';

// VIEWS
import HomeView from "../views/HomeView.jsx";
import LoginView from "../views/LoginView.jsx";
import ProductView from "../views/ProductView.jsx";
import NotFound from "../views/NotFound.jsx";
import RegisterView from "../views/RegisterView.jsx"
import UserProfileView from "../views/UserProfileView.jsx";
import EditProfileView from "../views/EditProfileView.jsx";

const index = createBrowserRouter([
    {
        Component: GuessLayout,
        children: [
            {
                path: '/iniciar-sesion',
                Component: LoginView,
            },
            {
                path: '/registrarse',
                Component: RegisterView,
            },
        ]
    },
    {
        Component: MainLayout,
        middleware: [authMiddleware],
        children: [
            {
                path: '/',
                Component: HomeView,
            },
            {
                path: '/producto/:name',
                Component: ProductView,
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

export default index;

/*
* React Router DATA mode documentation
* https://reactrouter.com/start/data/installation
* */