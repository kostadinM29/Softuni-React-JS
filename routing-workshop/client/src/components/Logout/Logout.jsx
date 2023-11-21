import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import AuthContext from "../../contexts/authContext";

const Logout = () =>
{
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);
    useEffect(() =>
    {
        const result = authService.logout()
            .then(() => logoutHandler())
            .catch(() => navigate('/'));
    }, []);

    return null;
};

export default Logout;