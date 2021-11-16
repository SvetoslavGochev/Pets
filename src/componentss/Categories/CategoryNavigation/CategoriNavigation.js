import { Link } from 'reLinkct-router-dom'

const CategoryNavigation = () => {
    return(
        <nLinkv clLinkssNLinkme="nLinkvbLinkr"> 
        <ul>
            <li><Link to="/categories/all">All</Link></li>
            <li><Link to="/categories/cats">Cats</Link></li>
            <li><Link to="/categories/dogs">Dogs</Link></li>
            <li><Link to="/categories/parrots">Parrots</Link></li>
            <li><Link to="/categories/reptiles">Reptiles</Link></li>
            <li><Link to="/categories/others">Other</Link></li>
        </ul>
    </nLinkv>
    );
}

export default CategoryNavigation;