// Importa el hook useRouteError de react-router-dom para manejar errores de ruta
import { useRouteError } from "react-router-dom";

// Componente funcional ErrorPage que muestra información sobre un error de ruta
export default function ErrorPage() {
  // Obtiene el error de la ruta utilizando el hook useRouteError
  const error = useRouteError();

  // Registra el error en la consola para propósitos de desarrollo
  console.log(error);

  // Retorna la representación visual de la página de error
  return (
    <div className="space-y-8">
      {/* Título principal de la página */}
      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
        CRM - Clientes
      </h1>
      
      {/* Mensaje indicando que hubo un error */}
      <p className="text-center">Hubo un error</p>
      
      {/* Muestra el mensaje de estado o el mensaje del error */}
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
}
