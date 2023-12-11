import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";

// Importación de componentes y funciones necesarios para las páginas y acciones
import NuevoCliente, {
  action as nuevoClienteAction,
} from "../pages/NuevoCliente";

import Index, { loader as clientesLoader } from "../pages/Index";

import EditarCliente, {
  loader as editarClienteLoader,
  action as editarClienteAction,
} from "../pages/EditarCliente";

import { action as eliminarClienteAction } from "./components/Cliente";

// Creación de un enrutador de React utilizando react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Página de inicio
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      // Página para agregar un nuevo cliente
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      // Página para editar un cliente existente
      {
        path: "/clientes/:clienteId/editar",
        loader: editarClienteLoader,
        action: editarClienteAction,
        element: <EditarCliente />,
        errorElement: <ErrorPage />,
      },
      // Acción para eliminar un cliente existente
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction,
      },
    ],
  },
]);

// Renderiza la aplicación utilizando ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Proveedor del enrutador para proporcionar la funcionalidad de enrutamiento */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
