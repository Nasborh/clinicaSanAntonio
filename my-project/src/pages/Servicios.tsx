import { Targets } from "../components/Targets"
import icon from "../assets/line.png"
import { Contactanos } from "../components/contactanos"
import { Banner } from "../components/bannner"


export function Servicios({ isOpen }) {
    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : ''}`} >
            <Banner page={0} />
            <div className="relative bg-sky-500 text-white">
                <div className="absolute inset-0 bg-cover bg-center"
                    Style={"background-image: url('../assets/imagen_clinica.jpg')"}></div>
                <div className="relative bg-opacity-75 bg-sky-500 p-6 text-center">
                    <h1 className="text-4xl font-bold">Servicios</h1>
                    <p className="text-lg mt-2">Descubre nuestra amplia gama de servicios para tu bienestar</p>
                </div>
            </div>

            <article className="items-center justify-center w-full bg-white justify-center flex flex-wrap grid grid-cols-1">
                <aside className="items-center justify-center my-7">
                    
                    <div className="flex justify-center items-center my-4">
                        <img src={icon} className="flex text-center"></img>
                    </div>

                    <p className="text-center text-gray-600 my-2 italic text-xl">En Clínicas San Antonio contamos con todos los servicios necesarios para ser tu entrada a la salud.</p>
                    <p className="text-center text-center text-gray-600 my-2  italic text-xl">Contamos con medicina general y especialidades en distintas ramas de la salud.</p>

                </aside>
            </article>


            <article className="items-center justify-center w-full bg-sky-50">
                <h1 className="text-3xl font-bold text-center text-blue-900 my-7">Servicios</h1>
                <section className="flex flex-wrap grid gap-4 mx-4 my-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 justify-center">

                    <Targets ServicioId={"Medicina General"} />
                    <Targets ServicioId={"Pediatría"} />
                    <Targets ServicioId={"Ginecología"} />
                    <Targets ServicioId={"Cardiología"} />
                    <Targets ServicioId={"Diagnostico por imágenes"} />
                    <Targets ServicioId={"Laboratorio Clínico"} />
                    <Targets ServicioId={"Terapia Físicas y Rehabilitación"} />

                </section>
            </article>
            <Contactanos />
        </section>
    )
}