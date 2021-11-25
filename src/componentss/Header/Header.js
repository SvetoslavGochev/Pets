import { Link, NavLink } from "react-router-dom";

const Header = ({ isAuthenticated, username }) => {
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
    <span>Welcome, {username}</span>
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
          <Link to="/">Dashboard</Link>

          {isAuthenticated 
              ? userNavigation
              : questNavigation
              }

        </section>
      </nav>
    </header>
  );
};

export default Header;
