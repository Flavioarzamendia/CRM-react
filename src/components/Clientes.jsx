const Clientes = ({cliente,key}) => {
    const {nombre, empresa, email, telefono , id} = cliente
  return (
    <tr className="border-b">
      <td className="p-6">
        <p className=" text-2xl text-gray-800 space-y-2">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className="p-6">
       <p className=" text-gray-600">
        <span className="text-gray-800 uppercase font-bold">Email: </span>{email}
       </p>
       <p className=" text-gray-600">
        <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}
       </p>
      </td>

      <td className="p-6 flex gap-3">
        <button type="button" className="px-8 py-2 text-blue-700 uppercase font-bold text-xs">Editar</button>
        <button type="button" className="px-6 py-2 text-red-500 uppercase font-bold text-xs">Eliminar</button>

      </td>
      
    </tr>
  );
};

export default Clientes;