import { Banner } from "../components/bannner"
import { TargetsNosotros } from "../components/targetsNosotros"


export function Nosotros({ isOpen }) {
    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : ''}`}>
            <Banner page={1} />
            <div className="mx-auto bg-sky-100">

                <div className="relative bg-sky-500 text-white">
                    <div className="absolute inset-0 bg-cover bg-center"
                        Style={"background-image: url('../assets/imagen_clinica.jpg')"}></div>
                    <div className="relative bg-opacity-75 bg-sky-500 p-6 text-center">
                        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
                        <p className="text-lg mt-2">Cuidando de ti y tu familia con profesionalismo y calidez</p>
                    </div>
                </div>

                <aside className="mx-auto bg-sky-100">
                    <TargetsNosotros Pos={"1"} Ser={"0"} />
                    <TargetsNosotros Pos={"2"} Ser={"1"} />
                    <TargetsNosotros Pos={"1"} Ser={"2"} />
                    <TargetsNosotros Pos={"2"} Ser={"3"} />
                    <TargetsNosotros Pos={"1"} Ser={"4"} />
                </aside>
            </div>
        </section>
    )
}