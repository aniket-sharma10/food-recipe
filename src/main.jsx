import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import ContextProvider from "./components/context/searchContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
