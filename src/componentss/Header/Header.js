import { Link } from "react-router-dom";

import {  useAuthContext } from "../../context/AuthContext";

import { useContext } from "react";

const Header = () => {
   const { user } = useAuthContext();

  let questNavigation = (
    <div id="guest">
      <Link to="/login" class="button">
        Login
      </Link>
      <Link to="/register" class="button">
        Registers
      </Link>
    </div>
  );
  let userNavigation = (
    <div id="user">
    <span>Welcome, {user.email} </span>
    <Link to="/my-pets" class="button">
      My Pets
    </Link>
    <Link to="/create" class="button">
      Add Pet
    </Link>
    <Link to="/logout" class="button">
      Logout
    </Link>
  </div>
  );

  return (
    <header id="site-header">
      <nav class="navbar">
        <section class="navbar-dashboard">
          <Link to="/dashboard">Dashboard</Link>

          {user.email 
               ? userNavigation
               :questNavigation
          }

          
              

        </section>
      </nav>
    </header>
  );
};

export default Header;
