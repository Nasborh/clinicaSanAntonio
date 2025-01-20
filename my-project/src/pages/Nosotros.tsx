import { Banner } from "../components/bannner"
import { CardNosotros } from "../components/InfoNosotros"
import { Parrafos } from "../components/InfoNosotros"

export function Nosotros({ isOpen }) {
    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : ''}`}>
            <Banner page={1} />
            <div className="mx-auto bg-sky-100">
                <aside className="flex flex-row grid gap-4 my-8 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 justify-center">
                    <div className="w-1/2 mx-auto">
                        <h1 className="font-bold text-blue-900 text-3xl border-b-4 border-sky-300">SOMOS CLINICA SAN ANTONIO</h1>
                        <Parrafos Content={"Apertura de nuestra primera sucursal en Cerro Viento el 17 de junio de 1996."} />
                        <Parrafos Content={"Aquí empezó todo, nació en Panamá un socio confiable para cuidar la salud, 24 Horas."} />
                        <Parrafos Content={"Cuidando el don más preciado de todas las personas del país, su salud."} />

                    </div>
                    <CardNosotros tittle={"MISIÓN"} content={"Brindamos servicios de salud de alta calidad y fácil acceso, de forma  integral y personalizada para nuestros pacientes, con un recurso humano  enfocado al servicio y a la superación permanente."} />
                    <CardNosotros tittle={"VISIÓN"} content={"Consolidarnos como Clínica líder de fácil acceso, ofreciendo atención  médica general, especialidades y hospitalización de corta estancia, con  un recurso humano idóneo, profesional y técnico, Responsables, enfocados  a la salud, bienestar y satisfacción de nuestros clientes."} />

                </aside>
            </div>
        </section>
    )
}