import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';
import { getProductById } from "../services/Product.js"

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
import usersListView from "../views/dashboard/users/UsersListView.jsx";
import UsersListView from "../views/dashboard/users/UsersListView.jsx";
import UserInfoView from "../views/dashboard/users/UserInfoView.jsx";
import { getUser } from "../services/User.js";
import UserEditView from "../views/dashboard/users/UsersEditView.jsx";
import UserCreateView from "../views/dashboard/users/UserCreateView.jsx";

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
                    try {
                        // params.id viene de la URL /dashboard/productos/:id/editar
                        const product = await getProductById(params.id);
                        return { product };
                        } catch (error) {
                        console.error("[loader productos editar] Error cargando producto", error);
                        throw new Response("No se pudo cargar el producto", { status: 500 });
                        }
                    },
                Component: ProductsEditView,
            },
            {
                path: '/dashboard/usuarios',
                Component: UsersListView
            },
            {
                path: '/dashboard/usuarios/:id/informacion',
                loader: async ({params}) => {
                    try {
                        const user = await getUser(params.id);
                        return { user };
                        } catch (error) {
                        console.error("[loader usuarios informacion] Error trayendo usuario", error);
                        throw new Response("No se pudo obtener al usuario", { status: 500 });
                    }
                },
                Component: UserInfoView
            },
            {
                path: '/dashboard/usuarios/:id/editar',
                loader: async ({params}) => {
                    try {
                        const user = await getUser(params.id);
                        return { user };
                        } catch (error) {
                        console.error("[loader usuarios informacion] Error trayendo usuario", error);
                        throw new Response("No se pudo obtener al usuario", { status: 500 });
                    }
                },
                Component: UserEditView
            },
            {
                path: '/dashboard/usuarios/crear',
                Component: UserCreateView
            },
        ]
    }
])

export default index;

/*
* React Router DATA mode documentation
* https://reactrouter.com/start/data/installation
* */