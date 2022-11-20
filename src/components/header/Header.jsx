import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png"
import "./header.css"



export default function Header() {


    return ( 
        
        < div className="header">

            <img src={logo} alt=" logo de casa" className= "logo" />

            <nav>
                <ul>

                    <li>
                        <NavLink  to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")} end>
                        Accueil
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink 
                        to="About"
                        className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
                            A Propos
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
            
        </div>
  
  
    )
  }