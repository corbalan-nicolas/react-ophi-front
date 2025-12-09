import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';

// LAYOUTS
import GuessLayout from "../layouts/GuessLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

// MIDDLEWARES
import { authMiddleware } from './middleware/auth.middleware.js';
import { adminMiddleware } from './middleware/admin.middleware.js'

// VIEWS
import HomeView from "../views/HomeView.jsx";
import LoginView from "../views/LoginView.jsx";
import ProductView from "../views/ProductView.jsx";
import NotFound from "../views/NotFound.jsx";
import RegisterView from "../views/RegisterView.jsx"
import UserProfileView from "../views/UserProfileView.jsx";
import EditProfileView from "../views/EditProfileView.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import MainPanelView from "../views/dashboard/MainPanelView.jsx";
import ProductsListView from "../views/dashboard/ProductsListView.jsx";
import ProductsCreateView from "../views/dashboard/ProductsCreateView.jsx";
import ProductsEditView from "../views/dashboard/ProductsEditView.jsx";

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
    },
    {
        Component: DashboardLayout,
        middleware: [authMiddleware, adminMiddleware],
        children: [
            {
                path: '/dashboard/home',
                Component: MainPanelView,
            },
            {
                path: '/dashboard/productos',
                Component: ProductsListView
            },
            {
                path: '/dashboard/productos/crear',
                Component: ProductsCreateView
            },
            {
                path:'/dashboard/productos/:id/editar',
                loader: async ({params}) => {
                    return {
                        product: {
                            name: 'TODO:',
                            barcode: 'Obtener estos datos en el loader',
                            ingredients: '(Archivo index.js, el que tiene las rutas)'
                        }
                    }
                },
                Component: ProductsEditView,
            }
        ]
    }
])

export default index;

/*
* React Router DATA mode documentation
* https://reactrouter.com/start/data/installation
* */