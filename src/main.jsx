import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente,{action as nuevoClienteAction} from "./pages/NuevoCliente";
import Index,{loader as clientesLoader} from "./pages/Index";
import EditarCliente,{loader as editarClienteLoader, action as actualizarClienteAction} from "./pages/EditarCliente";
import ErrorPage from "./components/ErrorPage";
import {action as eliminarClienteAction} from "./components/Clientes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      
      {
        path: "/clientes/nuevos",
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader : editarClienteLoader,
        action : actualizarClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clientes/:clienteId/eliminar',
        action: eliminarClienteAction

      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
