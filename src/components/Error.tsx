// Componente funcional Error que acepta contenido como hijos (children)
function Error({ children }) {
  return (
    // Contenedor con estilo para mostrar mensajes de error
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
      {/* Renderiza el contenido de error proporcionado como hijos */}
      {children}
    </div>
  );
}

// Exporta el componente Error como componente predeterminado
export default Error;
