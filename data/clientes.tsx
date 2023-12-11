// Función para obtener y retornar una lista de clientes
export async function obtenerClientes() {
  // Obtener datos desde el punto final de la API especificado en VITE_API_URL
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  // Analizar la respuesta como JSON
  const resultado = await respuesta.json();
  // Devolver los datos analizados en formato JSON
  return resultado;
}

// Función para agregar un nuevo cliente
export async function agregarCliente(datos) {
  try {
    // Enviar una solicitud POST al punto final de la API con los datos proporcionados
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Analizar la respuesta como JSON (opcional, depende de la respuesta de la API)
    await respuesta.json();
  } catch (error) {
    // Registrar cualquier error que ocurra durante la solicitud
    console.log(error);
  }
}

// Función para obtener detalles de un cliente específico por ID
export async function obtenerCliente(id) {
  // Obtener datos para un ID de cliente específico desde el punto final de la API
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  // Analizar la respuesta como JSON
  const resultado = await respuesta.json();
  // Devolver los datos analizados en formato JSON
  return resultado;
}

// Función para actualizar detalles de un cliente específico por ID
export async function actualizarCliente(id, datos) {
  try {
    // Enviar una solicitud PUT al punto final de la API con los datos proporcionados
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Analizar la respuesta como JSON (opcional, depende de la respuesta de la API)
    await respuesta.json();
  } catch (error) {
    // Registrar cualquier error que ocurra durante la solicitud
    console.log(error);
  }
}

// Función para eliminar un cliente específico por ID
export async function eliminarCliente(id) {
  try {
    // Enviar una solicitud DELETE al punto final de la API para un ID de cliente específico
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    // Analizar la respuesta como JSON (opcional, depende de la respuesta de la API)
    await respuesta.json();
  } catch (error) {
    // Registrar cualquier error que ocurra durante la solicitud
    console.log(error);
  }
}
