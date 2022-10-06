import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Housing from "./components/pages/housing/Housing"
import About from "./components/pages/about/About"
import ErrorPage from "./components/pages/error-page/Error-page"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/housings/:housingId",
    element: <Housing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
);




