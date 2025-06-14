import { Link, NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
<nav>
      <ul  >
       
        <li>
          <NavLink exact to="/My Kitchen">My Kitchen</NavLink> 
        </li>
        <li>
          <NavLink to="/Favorite">Favorites</NavLink>
        </li>
        <li>
          <Link to="/Cooked">Cooked</Link> 
        </li>
        <li>
          <Link to="/Pantry">Pantry</Link> 
        </li>
        
      </ul> 

    </nav>
  );
}

export default Nav;