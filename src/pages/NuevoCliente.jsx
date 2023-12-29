import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente} from "../data/Clientes";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  //validacion
  const errores = [];

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if(!regex.test(email)){
    errores.push('El email no es valido');

  }

  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarCliente(datos)

  return redirect('/')
}

const NuevoCliente = () => {
  const errores = useActionData();
  const navegate = useNavigate();
  return (
    <>
      <h1 className=" font-black text-4xl text-blue-700 uppercase">
        Nuevo Cliente
      </h1>
      <p className="mt-3">
        Llenar todos los campos para registrar un cliente nuevo
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-3 py-1 font-bold uppercase "
          onClick={() => navegate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post">
          <Formulario />
          <input
            type="submit"
            className="w-full mt-5 bg-blue-600 text-white p-3 text-center uppercase font-bold text-lg hover:bg-blue-700 "
            value="Registrar cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
