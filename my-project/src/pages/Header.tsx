import { NavLink, Link } from "react-router-dom";
import { Logo } from "../components/Logo";


export function Header({ isOpen, setIsOpen }) {
    
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header>
            <nav className="relative bg-white shadow" >
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex">
                            <Logo property="h-20 w-auto mx-auto" />
                        </Link>

                        <div className="flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-500 hover:text-gray-600  focus:outline-none focus:text-gray-600"
                                aria-label="toggle menu"
                            > {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                            )}

                            </button>
                        </div>
                        
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <ul className="flex space-x-4 ">
                                <li>
                                    <NavLink to="/" className={({ isActive }) => isActive ?
                                        "font-bold text-lg text-blue-950 transition-colors duration-300 transform  border-b-4 border-sky-400 mx-1.5 sm:mx-2" :
                                        "text-lg mx-2 border-b-2 border-transparent  transition-colors duration-300 transform hover:border-sky-400 hover:text-blue-950 hover:border-b-4 mx-1.5 sm:mx-2 "}>
                                        Inicio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Servicios" className={({ isActive }) => isActive ?
                                        "font-bold text-lg text-blue-950 transition-colors duration-300 transform  border-b-4 border-sky-400 mx-1.5 sm:mx-2" :
                                        "text-lg mx-2 border-b-2 border-transparent  transition-colors duration-300 transform hover:border-sky-400 hover:text-blue-950 hover:border-b-4 mx-1.5 sm:mx-2 "}>
                                        Servicios
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Citas" className={({ isActive }) => isActive ?
                                        "font-bold text-lg text-blue-950 transition-colors duration-300 transform  border-b-4 border-sky-400 mx-1.5 sm:mx-2" :
                                        "text-lg mx-2 border-b-2 border-transparent  transition-colors duration-300 transform hover:border-sky-400 hover:text-blue-950 hover:border-b-4 mx-1.5 sm:mx-2 "}>
                                        Solicitud de Citas en Linea
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Nosotros" className={({ isActive }) => isActive ?
                                        "font-bold text-lg text-blue-950 transition-colors duration-300 transform  border-b-4 border-sky-400 mx-1.5 sm:mx-2" :
                                        "text-lg mx-2 border-b-2 border-transparent  transition-colors duration-300 transform hover:border-sky-400 hover:text-blue-950 hover:border-b-4 mx-1.5 sm:mx-2 "}>
                                        Quienes Somos?
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Noticias" className={({ isActive }) => isActive ?
                                        "font-bold text-lg text-blue-950 transition-colors duration-300 transform  border-b-4 border-sky-400 mx-1.5 sm:mx-2" :
                                        "text-lg mx-2 border-b-2 border-transparent  transition-colors duration-300 transform hover:border-sky-400 hover:text-blue950 hover:border-b-4 mx-1.5 sm:mx-2 "}>
                                        Noticias
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )

}