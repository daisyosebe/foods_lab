import { Link, NavLink } from "react-router-dom"
import "./HomePage.css"
import Nav from "../../components/nav/Nav"
import Cover from "../../assets/images/mothercooks.png"
import Login from "../../components/login/Login.jsx"

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaCode } from "react-icons/fa6";

export default function HomePage() {
    return (
      <>
      <div>
        <header>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Chonburi&display=swap" rel="stylesheet"></link>
          WELCOME 
        </header>
        <div >
        {/* <Link to="/Cart">🛍️</Link>  */}
          <Nav/>
        </div>
      </div>

      <div className="container" >
        <div className="flex-item">

          <div className="icons">
          <FaLinkedin /> 
          <FaGithub /> <br/>
          <ImProfile />
          <FaCode />
          </div>

          <h1 >Special savory food that remind you of Home.Lorem ipsum dolor sit amet consectetur adipiscing elit.<br /> Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. <br /> </h1>

          <ul>
            <li>
              1. Lorem ipsum dolor sit amet. <br />
              2. Lorem ipsum dolor sit amet. <br />
              3. Lorem ipsum dolor sit amet. <br />
              4. Lorem ipsum dolor sit amet. <br />
            </li>
          </ul>

          <img
          src={Cover}
          alt="Cookbook"
          />

        </div>

        <div className="flex-login">
          <div className="login">
          <Login/>
          </div>
        </div>

      </div>
      </>
    
    );
  }
  