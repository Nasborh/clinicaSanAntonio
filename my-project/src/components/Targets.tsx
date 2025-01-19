import { info } from "../Models/Servicios"
import Serv1 from "../assets/serv1.jpg"
import Serv2 from "../assets/serv2.jpg"
import Serv3 from "../assets/serv3.png"
import Serv4 from "../assets/serv4.jpg"
import Serv5 from "../assets/serv5.jpg"
import Serv6 from "../assets/serv6.jpeg"
import Serv7 from "../assets/serv7.jpg"

const images = [Serv1, Serv2, Serv3, Serv4, Serv5, Serv6, Serv7];


export function Targets({ ServicioId }: { ServicioId: string }) {
    const ServiceContent = info[0].contenido.find((item) => item.Nombre === ServicioId);
    const image = images[ServiceContent.ImageId - 1]

    return (
        <div className=" max-w-sm bg-white border border-sky-200 rounded-lg mx-2 my-2 shadow">
            <a >
                <img className=" flex rounded-t-lg h-60 w-full" src={image} alt="" />
            </a>
            <div className="p-5 flex flex-col justify-between">
                <a>
                    <h5 className="flex mb-2 text-2xl font-bold tracking-tight text-sky-500">{ServiceContent.Nombre}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">{ServiceContent.Descripcion}</p>
            </div>
        </div>
    )
}

