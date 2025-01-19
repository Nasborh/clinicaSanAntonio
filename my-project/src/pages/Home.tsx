import { ImagesCarrousel } from "../components/ImagesCarrousel";
import { Separador } from "../components/separador";
import { ButtonCarousel } from "../components/ImagesCarrousel";
import { Targets } from "../components/Targets";
import { Ubicación } from "../components/Ubicacion";
import { info } from "../Models/Servicios";


export function Home({ isOpen }) {

    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : 'mt-0'}`} >
            <article id="default-carousel" className="relative w-full" data-carousel="slide">

                <div className="relative h-56 overflow-hidden  md:h-96">
                    <ImagesCarrousel property={1} />
                    <ImagesCarrousel property={2} />
                    <ImagesCarrousel property={3} />
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <ButtonCarousel Number={2} />
                    <ButtonCarousel Number={3} />
                    <ButtonCarousel Number={4} />
                </div>

                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>


            </article>

            <article className="items-center justify-center w-full bg-sky-100">
                <h1 className="text-3xl font-bold text-center text-blue-900 my-7">Nuestros Servicios</h1>
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
            <article className="items-center justify-center w-full my-0 ">
                <h1 className="text-3xl font-bold text-center text-blue-900 my-7">Ubicación</h1>
                <div className="flex flex-wrap grid grid-cols-2 gap-2 mx-4 my-4 md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
                    <aside className="flex flex-col items-center justify-center my-0 border rounded-lg shadow ">
                        <h1 className="text-3xl font-bold text-center text-sky-500 my-7">Mapa</h1>

                        <iframe className="w-full h-96"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.8771263309195!2d-66.90716609358786!3d10.510343021157638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59ba2b467e53%3A0x7eddb766f501f03a!2sPoliclinica%20La%20Arboleda!5e0!3m2!1ses!2sve!4v1737318072469!5m2!1ses!2sve"
                        ></iframe>

                    </aside>
                    <aside className="items-center justify-center border shadow rounded-lg">
                        <Ubicación property ={2}/>
                        <Ubicación property ={3}/>
                        
                    </aside>
                </div>
            </article>
        </section>

    )
}