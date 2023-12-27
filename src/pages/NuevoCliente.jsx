import {useNavigate, Form} from 'react-router-dom'
import Formulario from '../components/Formulario'

export function action(){
  console.log("Submit al formulario")
}

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
    

    <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

      <Form
      method='post'
      
      >
      <Formulario/>
      <input type="submit" 
      className='w-full mt-5 bg-blue-600 text-white p-3 text-center uppercase font-bold text-lg hover:bg-blue-700 '
      value="Registrar cliente"
      />
      </Form>
      

    </div>
    </>
  )
}

export default NuevoCliente