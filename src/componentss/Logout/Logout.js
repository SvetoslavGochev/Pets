import { Navigate } from "react-router";

import *as authService from '../../Service/authService';


const Logout = ({
    onLogout
}) =>  {
    authService.logout()
    onLogout();

    return <Navigate to="/login" />;
};

export default Logout;