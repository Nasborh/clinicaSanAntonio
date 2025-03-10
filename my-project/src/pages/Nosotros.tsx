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

                <aside className="mx-auto bg-sky-100 border my-5" >

                    <div className="flex flex-row">
                        <div className="basis-1/2">


                        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Contactanos</h2>
                        <form className="space-y-6">
                            
                            
                            {/* Nombre */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-user text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-sm font-semibold text-sky-500">Nombre</label>
                                    <input type="text" id="name" name="name"
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"></input>
                                </div>
                            </div>
                            {/* Apellido */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-user text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="last_name" className="block text-sm font-semibold text-sky-500">Apellido</label>
                                    <input type="text" id="last_name" name="last_name" 
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"></input>
                                </div>
                            </div>
                            
                            
                           
                            {/* Teléfono */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-phone text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="block text-sm font-semibold text-sky-500">Teléfono</label>
                                    <input type="tel" id="phone" name="phone"
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500" required></input>
                                </div>
                            </div>
                            {/* Correo */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-envelope text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-sm font-semibold text-sky-500">Correo</label>
                                    <input type="email" id="email" name="email" 
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="Dirección de Correo Electrónico" required></input>
                                </div>
                            </div>
                            {/* Botón  */}
                            <div>
                                <button type="submit"
                                    className="w-full bg-sky-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>












                        </div>
                        <div className="basis-1/2 border">01</div>

                    </div>


                </aside>
            </div>
        </section>
    )
}