import { Link } from "react-router-dom";

interface Posicion {
    title: string;
    contenido: Array<{ Nombre?: string; ruta?: string; Direccion?: string; Telefono?: string; Correo?: string }>;
}

export function SeccionesFooter({posicion}: {posicion: Posicion}) {
    

    return (
        <div className="flex flex-col md:ml-6 my-2">
            <h3 className="text-lg font-semibold text-blue-900">{posicion.title}</h3>
            <ul className="mt-2">
                {posicion.contenido.map((item, index) => (
                    <li key={index} className="mt-2">
                        <Link to={item.ruta} className="text-sm text-gray-600 hover:text-sky-500">{item.Nombre}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export function SeccionesFooterText({posicion}: {posicion: Posicion}) {
   

    return (
        <div className="flex flex-col md:ml-6 my-2">
            <h3 className="text-lg font-semibold text-blue-900 ">{posicion.title}</h3>
            <ul className="mt-2">
                {posicion.contenido.map((item, index) => (
                    <li key={index} className="mt-2">
                      <p  className="text-sm text-gray-600">{item.Descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

