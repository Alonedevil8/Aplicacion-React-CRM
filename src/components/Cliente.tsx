// Importación de funciones y componentes necesarios de react-router-dom y clientes
import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../../data/clientes";

// Función de acción que se llama al intentar eliminar un cliente
export async function action({ params }) {
  // Llama a la función eliminarCliente con el ID del cliente como parámetro
  await eliminarCliente(params.clienteId);
  // Redirige a la página principal después de eliminar el cliente
  return redirect("/");
}

// Componente funcional para representar la información de un cliente
function Cliente({ cliente }) {
  // Obtiene la función de navegación de react-router-dom
  const navigate = useNavigate();

  // Extrae datos específicos del cliente para su presentación
  const { nombre, empresa, email, telefono, id } = cliente;

  // Retorna la representación visual de la información del cliente
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}{" "}
        </p>
        <p className="text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefono}{" "}
        </p>
      </td>

      <td className="p-6 flex gap-3 justify-end">
        {/* Botón para navegar a la página de edición del cliente */}
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        {/* Formulario para enviar una solicitud de eliminación del cliente */}
        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={(e) => {
            // Muestra un mensaje de confirmación antes de enviar la solicitud de eliminación
            if (!confirm("¿Deseas eliminar este registro?")) {
              e.preventDefault();
            }
          }}
        >
          {/* Botón para enviar la solicitud de eliminación */}
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
}

// Exporta el componente Cliente como componente predeterminado
export default Cliente;
