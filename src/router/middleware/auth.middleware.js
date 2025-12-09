import { redirect } from 'react-router'
import {userContext} from "../contexts/user.context.js";
import {jwtDecode} from "jwt-decode";

export async function authMiddleware({ context }) {
    const token = localStorage.getItem('ophi_token');

    if (!token) {
        throw redirect('/iniciar-sesion');
    }

    const user = jwtDecode(token);
    context.set(userContext, { user });
}