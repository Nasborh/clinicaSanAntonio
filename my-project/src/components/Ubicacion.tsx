import { info } from "../Models/Servicios";

export function Ubicación({ property }: { property: number }) {

    return (
        <div className="flex flex-col items-center mx-8 my-2 content-start">
            <h1 className="text-3xl flex font-bold text-center text-sky-500 my-7">{info[property].title}</h1>
            <p className="text-xl flex font-bold text-center text-gray-800 my-7">{info[property].contenido[0].Descripcion}</p>

        </div>

    )
}