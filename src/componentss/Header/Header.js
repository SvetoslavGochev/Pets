
import {Link, NavLink} from 'react-router-dom';


const Header = () => {
  return (
    <header id="site-header">
 
    <nav class="navbar">
        <section class="navbar-dashboard">
            <Link to="/">Dashboard</Link>
            
            <div id="guest">
                <Link to="/login" class="button" >Login</Link>
                <Link  to="/register" class="button" >Registers</Link>
            </div>
           
            <div id="user">
                <span>Welcome, Peter</span>
                <Link to="/my-pets"  class="button" >My Pets</Link>
                <Link to="/add-pet"  class="button" >Add Pet</Link>
                <Link to="/logout"  class="button" >Logout</Link>
            </div>
        </section>
    </nav>
</header>
  );
};

export default Header;
