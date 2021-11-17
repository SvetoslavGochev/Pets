
import { NavLink } from "react-router-dom";

const CategoryNavigation = () => {
    return(
        <nav className="navbar"> 
        <ul>
            <li><NavLink  to="/categories/all"  >All</NavLink></li>
            <li><NavLink  to="/categories/cats" >Cats</NavLink></li>
            <li><NavLink  to="/categories/dogs">Dogs</NavLink></li>
            <li><NavLink  to="/categories/parrots" >Parrots</NavLink></li>
            <li><NavLink  to="/categories/reptiles" >Reptiles</NavLink></li>
            <li><NavLink  to="/categories/others" >Other</NavLink></li>
        </ul>       
        <style jsx>{`
           .active {
                 background-color: red !important;
                }
        `}</style>


    </nav>
    );
}

export default CategoryNavigation;