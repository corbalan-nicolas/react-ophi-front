import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import MainLayout from "./layouts/MainLayout.jsx";
import ProductView from "./views/ProductView.jsx";
import NotFound from "./views/NotFound.jsx";

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
                path: '/not-found',
                Component: NotFound,
            },
        ]
    }
])

export default router;

/*
* React Router DATA mode documentation
* https://reactrouter.com/start/data/installation
* */