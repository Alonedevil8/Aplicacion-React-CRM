import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../src/components/Formulario";
import Error from "../src/components/Error";
import { agregarCliente } from "../data/clientes";

// Función asincrónica para manejar la acción de agregar un nuevo cliente
export async function action({ request }) {

  // Obtener los datos del formulario desde la solicitud HTTP
  const formData = await request.formData();

  // Convertir los datos del formulario en un objeto utilizando Object.fromEntries
  const datos = Object.fromEntries(formData);

  // Obtener el valor del campo "email" del formulario
  const email = formData.get("email");


  // Validación de datos del formulario
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  {
    /* Validacion de caracteres para comprobar Correo */
  }
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El Email no es válido");
  }

  // Retornar mensajes de error si hay errores de validación
  if (errores.length > 0) {
    return errores;
  }

  // Llamar a la función para agregar el cliente si no hay errores
  await agregarCliente(datos);
  console.log(datos)

  return redirect('/')
}

// *** Componente funcional para la página de Nuevo Cliente ***
function NuevoCliente() {
  // Obtener datos de acción para manejar posibles errores de validación
  const errores = useActionData();

  // Obtener la función navigate de React Router para la navegación
  const navigate = useNavigate();

  return (
    <>
      {/* TITULO */}
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        {/* Botón para volver atrás */}
        <button
          className="bg-blue-800 text-red.500 px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      {/* Contenedor del formulario */}
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {/* Mostrar errores de validación si los hay */}
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        {/* Formulario para ingresar datos del nuevo cliente */}
        <Form method="post" noValidate>
          {/* Componente de formulario reutilizable */}
          <Formulario />

          {/* Botón para enviar el formulario */}
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
}

// Exportar el componente NuevoCliente por defecto
export default NuevoCliente;
