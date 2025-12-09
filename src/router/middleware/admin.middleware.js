import { redirect } from 'react-router'
import {userContext} from "../contexts/user.context.js";

export async function adminMiddleware({ context }) {
    const { user } =  context.get(userContext);

    if (user.role !== 'admin') {
        // TODO: Notification
        throw redirect('/')
    }
}