// Importación de componentes y hooks necesarios de react-router-dom
import { Outlet, Link, useLocation } from "react-router-dom";

// Componente funcional Layout que define la estructura general de la aplicación
const Layout = () => {
  // Obtiene información sobre la ubicación actual utilizando useLocation
  const location = useLocation();

  // Retorna la representación visual del diseño de la aplicación
  return (
    <div className="md:flex md:min-h-screen">
      {/* Barra lateral izquierda con el menú de navegación */}
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM Clientes
        </h2>
        <nav className="mt-10">
          {/* Enlace para la página principal "Clientes" */}
          <Link
            className={`${
              location.pathname === "/" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300 text-white`}
            to="/"
          >
            Clientes
          </Link>

          {/* Enlace para la página de "Nuevos Clientes" */}
          <Link
            className={`${
              location.pathname === "/clientes/nuevo"
                ? "text-blue-300"
                : "text-white"
            } text-2xl block mt-2 hover:text-blue-300 text-white`}
            to="/clientes/nuevo"
          >
            Nuevos Clientes
          </Link>
        </nav>
      </aside>

      {/* Contenido principal que utiliza Outlet para renderizar las páginas secundarias */}
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

// Exporta el componente Layout como componente predeterminado
export default Layout;
