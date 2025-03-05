import { Banner } from "../components/bannner"
import { Articulos } from "../components/articulos"

export function Noticias({ isOpen }) {
    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : ''}`} >
            <Banner page={3} />
            <div className="bg-sky-100">
                <div className="relative bg-sky-500 text-white">
                    <div className="absolute inset-0 bg-cover bg-center" Style={"background-image: url('../assets/imagen_clinica.jpg')"}></div>
                    <div className="relative bg-opacity-75 bg-sky-500 p-6 text-center">
                        <h1 className="text-4xl font-bold">Noticias y blogs</h1>
                        <p className="text-lg mt-2">Descubre artículos, tips y actualizaciones para tu bienestar</p>
                    </div>
                </div>

                <aside className="mx-auto my-16 bg-sky-100">
                    <section className="flex flex-wrap grid-col-2 gap-2 my-5 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 items-center bg-center justify-center">
                        <Articulos title="Cómo Cuidar tu Salud Mental en Tiempos de Estrés" description="Aprende a manejar el estrés y cuida tu salud mental con estos consejos expertos." image={0} />
                        <Articulos title="Alimentos que Refuerzan tu Sistema Inmunológico" description="Descubre los alimentos que te ayudan a fortalecer tu sistema inmunológico." image={1} />
                        <Articulos title="Beneficios de los Chequeos Médicos Regulares" description="¿Por qué son importantes los chequeos médicos? Te lo explicamos aquí" image={2} />
                        <Articulos title="Cómo Prevenir Enfermedades Cardiovasculares" description="Protege tu corazón con estos consejos para prevenir enfermedades cardiovasculares." image={3} />
                        <Articulos title="La Importancia de la Hidratación en tu Salud Diaria" description="Descubre por qué la hidratación es clave para tu salud y bienestar." image={4} />
                        <Articulos title="Cómo Identificar Alergias Comunes en Niños" description="Aprende a identificar alergias en tus hijos y cuándo buscar ayuda médica." image={5} />
                        <Articulos title="Consejos para una Recuperación Rápida después de una Cirugía" description="Acelera tu recuperación después de una cirugía con estos consejos expertos." image={6} />
                        <Articulos title="Cómo Prevenir Enfermedades Respiratorias en Temporada de Frío" description="Protege tu salud respiratoria con estos consejos para la temporada de frío." image={7} />
                        <Articulos title="Beneficios de la Terapia Física en la Recuperación de Lesiones" description="Descubre cómo la terapia física puede ayudarte a recuperarte de lesiones." image={8} />
                        <Articulos title="Cómo Mejorar tu Postura y Evitar Dolores de Espalda" description="Aprende a mejorar tu postura y prevenir dolores de espalda con estos consejos." image={9} />
                        <Articulos title="Consejos para una Alimentación Saludable en la Tercera Edad" description="Descubre cómo llevar una alimentación saludable en la tercera edad." image={10} />
                        <Articulos title="Cómo Prevenir el Cáncer de Mama con Autoexámenes" description="Aprende a prevenir el cáncer de mama con autoexámenes y chequeos regulares." image={11} />
                        <Articulos title="Cómo Prepararte para una Cirugía: Guía Paso a Paso" description="Prepárate para una cirugía sin estrés con esta guía paso a paso." image={12} />
                        <Articulos title={"Beneficios de la Terapia Psicológica en tu Bienestar"} description={"Descubre cómo la terapia psicológica puede ayudarte a mejorar tu bienestar emocional."} image={13} />
                        <Articulos title={"Cómo Prevenir Enfermedades de Transmisión Sexual"} description={"Aprende a prevenir enfermedades de transmisión sexual con estos consejos de salud."} image={14} />
                        <Articulos title={"Cómo Mejorar tu Salud Digestiva con una Dieta Equilibrada"} description={"Aprende a mejorar tu salud digestiva con una dieta equilibrada y hábitos saludables."} image={15} />

                    </section>



                </aside>
            </div>


        </section>
    )
}


