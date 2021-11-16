
import { NavLink } from "react-router-dom";

const CategoryNavigation = () => {
    return(
        <nav className="navbar"> 
        <ul>
            <li><NavLink  to="/categories/all" activeClassName="nav-link-selected" >All</NavLink></li>
            <li><NavLink  to="/categories/cats" activeClassName="nav-link-selected">Cats</NavLink></li>
            <li><NavLink  to="/categories/dogs"activeClassName="nav-link-selected">Dogs</NavLink></li>
            <li><NavLink  to="/categories/parrots" activeClassName="nav-link-selected">Parrots</NavLink></li>
            <li><NavLink  to="/categories/reptiles" activeClassName="nav-link-selected">Reptiles</NavLink></li>
            <li><NavLink  to="/categories/others" activeClassName="nav-link-selected">Other</NavLink></li>
        </ul>       
        <style jsx="true">{`
     .nav-link-selected {
         background-color: green !important;
     }
    `}</style>


    </nav>
    );
}

export default CategoryNavigation;