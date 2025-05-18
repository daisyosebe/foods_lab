import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
<nav>
      <ul class="bg-gray-300 flex flex-col space-y-10" >
        <li class= "bg-red-200">
          <NavLink exact to="/African">African</NavLink> {/* Uses exact to match the root path */}
        </li>
        <li class= "bg-orange-200">
          <NavLink to="/Asian">Asian</NavLink>
        </li>
        <li class= "bg-yellow-200">
          <Link to="/European">European</Link> {/* Basic navigation */}
        </li>
        <li class= "bg-green-200">
          <Link to="/NorthAmerican">North America</Link> {/* Basic navigation */}
        </li>
        <li class= "bg-blue-200">
          <Link to="/SouthAmerican">South America</Link> {/* Basic navigation */}
        </li>

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