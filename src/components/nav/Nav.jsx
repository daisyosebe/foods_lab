import { Link, NavLink } from "react-router-dom";
import "./Nav.css"
import { GiCook } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { TbFridge } from "react-icons/tb";
import { MdShoppingCart } from "react-icons/md";





const Nav = () => {
    return (
<nav>
      <ul  >
       
        <li>
          <NavLink exact to="/My Kitchen"><GiCook />
</NavLink> 
        </li>

        <li>
          <NavLink to="/Favorite"><MdOutlineFavorite />
</NavLink>
        </li>

        <li>
          <Link to="/Cooked"><PiCookingPotFill />
</Link> 
        </li>
        
        <li>
          <Link to="/Pantry"><TbFridge/></Link> 
        </li>
        
        <li>
          <NavLink exact to="/Cart"><MdShoppingCart />
</NavLink> 
        </li>   
      </ul> 

    </nav>
  );
}

export default Nav;