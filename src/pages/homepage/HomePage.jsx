import { Link, NavLink } from "react-router-dom";
import Nav from "../../components/nav/Nav"
import Cover from "../../assets/images/cover.jpg"
import Login from "../../components/login/Login.jsx"


export default function HomePage() {
    return (
      <>
      <div>
        FOODS LAB
        <Link to="/Cart">🛍️</Link> 
      </div>

      <div class="flex">
        <div class = "h-screen bg-cover bg-center">
          <img
          src={Cover}
          alt="Cookbook"
          class= "object-cover h-full w-full "
          />
        </div>


        <div class = "flex w-1/12 ">
        <Nav/>
        </div>

        <div class = "flex-1/4">
        <Login/>
        </div>

      </div>
      </>
    
    );
  }
  