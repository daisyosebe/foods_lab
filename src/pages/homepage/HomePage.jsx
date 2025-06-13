import { Link, NavLink } from "react-router-dom"
import "./HomePage.css"
import Nav from "../../components/nav/Nav"
import Cover from "../../assets/images/cover.jpg"
import Login from "../../components/login/Login.jsx"



export default function HomePage() {
    return (
      <>
      <div>
        FOODS LAB
        <Link to="/Cart">🛍️</Link> 

        <div className = "nav">
        <Nav/>
        </div>
      </div>

      <div className="grid" >
        <div>
          <img
          src={Cover}
          alt="Cookbook"
          />
        </div>


        <div className="login">
        <Login/>
        </div>

      </div>
      </>
    
    );
  }
  