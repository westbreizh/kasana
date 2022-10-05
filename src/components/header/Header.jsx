import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png"
import "./header.css"


export default function Header() {


    return ( 
        
        < div className="header">

            <img src={logo} alt=" logo de casa" className= "logo" />

            <nav>

                <NavLink  to="/"
                className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
                 Accueil
                 </NavLink>

                <NavLink 
                 to="About"
                 className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
                     A propos
                </NavLink>

            </nav>
            
        </div>
  
  
    )
  }