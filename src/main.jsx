import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {RouterProvider} from "react-router/dom";
import router from './router.js'
import {Outlet} from "react-router";

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
