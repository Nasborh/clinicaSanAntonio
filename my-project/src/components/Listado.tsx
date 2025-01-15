import { Link } from "react-router-dom";
import  {info } from "../Models/Servicios";

export function Listado({ruta}: {ruta: string}) {
    return (

        info.map(servicio =>
            <li className="mb-4">
                 <Link to={ruta} className="hover:underline">{servicio.Nombre}</Link>
            </li>

         )
    )       
}