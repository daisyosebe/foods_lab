import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
<nav>
      <ul class="bg-gray-300 flex flex-col" >
        <li>
          <NavLink exact to="/African">African</NavLink> {/* Uses exact to match the root path */}
        </li>
        <li>
          <NavLink to="/Asian">Asian</NavLink>
        </li>
        <li>
          <Link to="/European">European</Link> {/* Basic navigation */}
        </li>
        <li>
          <Link to="/NorthAmerican">North America</Link> {/* Basic navigation */}
        </li>
        <li>
          <Link to="/SouthAmerican">South America</Link> {/* Basic navigation */}
        </li>
      </ul>




      {/* { <ul class="bg-red-200">
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
        <li>
          <Link to="/Cart">🛍️</Link> 
        </li>
      </ul> } */}
    
    </nav>
  );
}

export default Nav;