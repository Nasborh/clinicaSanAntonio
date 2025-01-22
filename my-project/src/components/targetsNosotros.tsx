import ImageExample from "../assets/clinica2.jpg"
import ImageExample1 from "../assets/mision2.jpg"
import ImageExample2 from "../assets/vision.jpg"
import ImageExample3 from "../assets/medicos.jpg"
import ImageExample4 from "../assets/serv2.jpg"



const info = [
    {
        "Tittle": "NUESTRA CLINICA",
        "P1": "Durante más de dos décadas, hemos tenido el honor de servir a la comunidad de Oviedo con un compromiso inquebrantable hacia la salud de su piel y su bienestar estético.",
        "P2": "En la Clínica San Antonio, hemos mantenido nuestro firme compromiso de ofrecer lo mejor en dermatología y estética, respaldados por tecnología de vanguardia y un equipo de profesionales que se esfuerza por superarse día tras día.",
        "Image" : ImageExample
    },
    {
        "Tittle": "NUESTRA MISIÓN",
        "P1": "Nuestra misión desde el inicio ha sido clara: brindar a nuestros pacientes un servicio excepcional respaldado por la última tecnología disponible en el campo de la dermatología y la estética. Sabemos que la confianza depositada en nosotros por todos ustedes nos ha llevado a este punto, y siempre nos esforzamos por superar sus expectativas.",
        "P2": "Contamos con instalaciones de primer nivel, diseñadas para ofrecer a nuestros pacientes un entorno cómodo y acogedor. Aquí encontrarás un trato personalizado y único que refleja nuestra dedicación a su bienestar.",
        "Image" : ImageExample1
    },
    {
        "Tittle": "NUESTRA VISIÓN",
        "P1": "Consolidarnos como Clínica líder de fácil acceso, ofreciendo atención médica general, especialidades y hospitalización de corta estancia, con un recurso humano idóneo, profesional y técnico, Responsables, enfocados a la salud, bienestar y satisfacción de nuestros clientes.",
        "P2": "",
        "Image" : ImageExample2
    },
    {
        "Tittle": "NUESTRO EQUIPO",
        "P1": "Nuestro equipo está formado por dermatólogos y cirujanos vasculares altamente capacitados y en constante actualización. Participa activamente en congresos nacionales e internacionales para estar al tanto de los últimos avances en el campo. Además, contamos con un equipo de especialistas en estética liderados por nuestros doctores expertos.",
        "P2": "",
        "Image" : ImageExample3

    }, 
    {
        "Tittle": "",
        "P1": "Cada miembro de nuestro equipo está especializado en diversas áreas de la dermatología, incluyendo la dermatología clínica, la dermatología oncológica, la dermatología estética y la dermatología cosmética. Además, nuestro equipo de administración, técnicos de estética y enfermeras juegan un papel fundamental para brindar el mejor cuidado tanto a nuestros médicos como a nuestros pacientes.",
        "P2": "",
        "Image" : ImageExample4

    }, 


]



export function TargetsNosotros({ Pos , Ser }) {

    if (Pos == 1) {

        return (
            <section className=" my-10 mx-5 border-gray grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2">
                <ComponenteImagen Route={info[Ser].Image} />
                <ComponenteInfo Info = {info[Ser]} />
            </section>
        )


    } else {
        return (

            <section className=" my-20 mx-5 border-gray grid grid-cols-3">
                <ComponenteInfo  Info = {info[Ser]} />
                <ComponenteImagen Route={info[Ser].Image}/>
            </section>
        )
    }
}

function ComponenteImagen({Route}) {

    return (
        <div className="mx-7 col-span-2">
            <img src={Route} className="h-96 w-full"></img>
        </div>

    )

}

function ComponenteInfo({Info}) {
  
    return (

        <div className="mx-10 col-span-2 lg:col-span-1">
            <h1 className="font-bold text-blue-900 text-3xl border-b-2 border-sky-500">{Info.Tittle}</h1>
            <Parrafos Content={Info.P1} />
            <Parrafos Content={Info.P2} />
        </div>
    )
}

function Parrafos({ Content }) {
    return (
        <p className="text-justify text-lg text-gray-600 my-6">{Content}</p>

    )

}