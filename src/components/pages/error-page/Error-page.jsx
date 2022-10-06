import { NavLink, useRouteError } from "react-router-dom";
import Header from "../../header/Header";
import "./error-pages.css"

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error.statusText)
  console.log(error.message)

  return (


    <div>

      <Header />

      <div className="error_container">

          <p className="error_number">
            404
          </p>

          <p className="error_message">
            Oups ! La page que vous demandez n'existe pas.
          </p>

          <NavLink to="/"className="error_link">
              Retournez sur la page d'accueil
          </NavLink>
          
      </div>

    </div>

  );
};