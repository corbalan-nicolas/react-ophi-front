import { createRoot } from 'react-dom/client'

import './index.css' // Personally, I prefer to disable all styles while I'm doing functionalities
import {RouterProvider} from "react-router/dom";
import router from './router.js'
import {AuthProvider} from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(

    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
)
