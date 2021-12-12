import { Navigate, useNavigate } from "react-router-dom";

import * as authService from '../../Service/authService';

import {  useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Logout = () =>  {
 
    const navigate = useNavigate();

    const {user, logout} = useAuthContext();

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