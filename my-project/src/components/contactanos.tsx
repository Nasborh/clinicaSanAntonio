import { NavLink, Link } from "react-router-dom";

export function Contactanos() {
    return (
        <article className="grid grid-cols-6 gap-4 my-6 mx-8">
            <aside className="col-start-1 col-end-3">
                <h1 className="text-2xl text-gray-500 font-bold">Contactanos para agendar una cita</h1>
            </aside>

            <aside className=" col-end-7 col-span-">
                <button type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                ><Link to="/Citas" className="flex"> Contactanos
                    </Link></button>

            </aside>


        </article>


    )


}