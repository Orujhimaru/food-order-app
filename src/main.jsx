import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import AuthProvider from "./components/AuthProvider";
import routes from "./routes";
import Header from "./Header";  

const router = createBrowserRouter(routes);
const rootDiv = document.getElementById("root");
ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <AuthProvider isSingedIn={true}>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
  
  
);
