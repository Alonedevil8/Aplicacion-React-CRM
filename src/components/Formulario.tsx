// Componente funcional Formulario que acepta un objeto cliente como prop
const Formulario = ({ cliente }) => {
    return (
      <>
        {/* Sección para el nombre del cliente */}
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="nombre">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Cliente"
            name="nombre"
            defaultValue={cliente?.nombre}
          />
        </div>
  
        {/* Sección para la empresa del cliente */}
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="empresa">
            Empresa:
          </label>
          <input
            id="empresa"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Empresa del Cliente"
            name="empresa"
            defaultValue={cliente?.empresa}
          />
        </div>
  
        {/* Sección para el correo electrónico del cliente */}
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Email del Cliente"
            name="email"
            defaultValue={cliente?.email}
          />
        </div>
  
        {/* Sección para el teléfono del cliente */}
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            id="telefono"
            type="tel"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Teléfono del Cliente"
            name="telefono"
            defaultValue={cliente?.telefono}
          />
        </div>
  
        {/* Sección para las notas del cliente */}
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="notas">
            Notas:
          </label>
          <textarea
            as="textarea"
            id="notas"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
            placeholder="Notas del Cliente"
            name="notas"
            defaultValue={cliente?.notas}
          />
        </div>
      </>
    );
  };
  
  // Exporta el componente Formulario como componente predeterminado
  export default Formulario;
  