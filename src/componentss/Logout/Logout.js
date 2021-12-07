import { Navigate, useNavigate } from "react-router-dom";

import * as authService from '../../Service/authService';
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";


const Logout = () =>  {
 
    const navigate = useNavigate();

    const {user, logout} = useContext(AuthContext);

    useEffect(() => {

        authService.logout(user.accessToken)
        .then(() => {
            logout();
            navigate('/dashboard')
        })
    }, [])

   
  
    return null;
    // return <Navigate to="/login" replace="{true}"/>;
};

export default Logout;