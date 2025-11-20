import { redirect } from 'react-router'
import {userContext} from "../contexts/user.context.js";

export async function authMiddleware({ context }) {
    const token = localStorage.getItem('ophi_token');

    if (!token) {
        throw redirect('/iniciar-sesion');
    }

    context.set(userContext, { token });
}