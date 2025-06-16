import { Link, NavLink } from "react-router-dom"
import "./Recipe.css"
import Nav from "../../components/nav/Nav.jsx"

export default function Recipe(){
    return(
        <>
        <div>
            <header>
                MotherLand Eats
            </header>
            <div>
                <Nav/>
            </div>
        </div>

        
        </>

    );
}