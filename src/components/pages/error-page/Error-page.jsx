import { NavLink } from "react-router-dom";
import "./error-pages.css"

export default function ErrorPage() {

  return (

      <div className="error_container">

          <p className="error_number">
            404
          </p>

          <p className="error_message">
            Oups ! La page que vous demandez n'existe pas.
          </p>

          <NavLink to="/Home"className="error_link">
              Retournez sur la page d'accueil
          </NavLink>
          
      </div>
  )
}