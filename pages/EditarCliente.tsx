// Importación de componentes y funciones necesarios de react-router-dom y clientes
import {
  Form,
  useNavigate,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../data/clientes";
import Formulario from "../src/components/Formulario";
import Error from "../src/components/Error";

// Función de carga de datos que obtiene la información del cliente para editar
export async function loader({ params }) {
  // Obtiene la información del cliente utilizando el ID proporcionado en los parámetros
  const cliente = await obtenerCliente(params.clienteId);

  // Lanza un error 404 si el cliente no se encuentra
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "El Cliente no fue encontrado",
    });
  }

  // Retorna la información del cliente
  return cliente;
}

// Función de acción que se ejecuta al enviar el formulario de edición
export async function action({ request, params }) {
  // Obtiene los datos del formulario
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  // Validación de los datos del formulario
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El Email no es válido");
  }

  // Retorna los errores si existen
  if (errores.length) {
    return errores;
  }

  // Actualiza la información del cliente utilizando la función actualizarCliente
  await actualizarCliente(params.clienteId, datos);

  // Redirige a la página principal después de la actualización
  return redirect("/");
}

// Componente funcional EditarCliente para la edición de información del cliente
function EditarCliente() {
  // Obtiene la función de navegación, la información del cliente y los errores de la acción
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  // Retorna la representación visual de la página de edición del cliente
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        A continuación podrás modificar los datos de un cliente
      </p>

      {/* Botón para volver a la página anterior */}
      <div className="flex justify-end">
        <button
          className="bg-blue-800px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      {/* Formulario para editar la información del cliente */}
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {/* Muestra mensajes de error si existen */}
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        {/* Formulario para la edición de información del cliente */}
        <Form method="post" noValidate>
          {/* Componente Formulario que muestra campos editables del cliente */}
          <Formulario cliente={cliente} />

          {/* Botón para enviar el formulario y guardar los cambios */}
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg"
            value="Guardar Cambios"
          />
        </Form>
      </div>
    </>
  );
}

// Exporta el componente EditarCliente como componente predeterminado
export default EditarCliente;
