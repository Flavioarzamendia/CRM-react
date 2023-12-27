import {useNavigate} from 'react-router-dom'

const NuevoCliente = () => {

  const navegate = useNavigate()
  return (
    <>
    <h1 className=" font-black text-4xl text-blue-700 uppercase">Nuevo Cliente</h1>
    <p className="mt-3">Llenar todos los campos para registrar un cliente nuevo</p>

    <div className='flex justify-end'>
        <button className='bg-blue-500 text-white px-3 py-1 font-bold uppercase '
        onClick={() => navegate(-1)}
        >
            Volver
            </button>

    </div>
    </>
  )
}

export default NuevoCliente