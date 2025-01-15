import { NavLink, Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-white-600 text-blue-900">
            <Link to="/" className="">
                <Logo property="h-20 w-auto"/>
            </Link>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <NavLink to="/Servicios" className={({ isActive }) => isActive ? "font-bold" : ""}>
                            Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Citas" className={({ isActive }) => isActive ? "font-bold" : ""}>
                           Solicitud de Citas en Linea
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Nosotros" className={({ isActive }) => isActive ? "font-bold" : ""}>
                            Quienes Somos?
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Noticias" className={({ isActive }) => isActive ? "font-bold" : ""}>
                           Noticias
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    )

}