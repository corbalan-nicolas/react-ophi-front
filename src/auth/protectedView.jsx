import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { Navigate } from "react-router";


const protectedView = ( { children }) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    return (
        !user ? <Navigate to="/register"></Navigate> : children
    )
}

export default protectedView;