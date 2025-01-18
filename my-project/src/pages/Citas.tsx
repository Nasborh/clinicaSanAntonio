export function Citas() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Encabezado  */}
            <div className="relative bg-blue-600 text-white">
                <div className="absolute inset-0 bg-cover bg-center"
                    Style="background-image: url('../assets/imagen_clinica.jpg');"></div>
                <div className="relative bg-opacity-75 bg-blue-600 p-6 text-center">
                    <h1 className="text-4xl font-bold">Clínica Salud Total</h1>
                    <p className="text-lg mt-2">Solicita tu cita en línea de manera rápida y sencilla</p>
                </div>
            </div>

            {/* htmlFormulario */}
            <div className="container mx-auto py-12 px-4 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Formulario de Solicitud de Cita</h2>
                    <form className="space-y-6">
                        {/* Especialidad  */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <i className="fas fa-stethoscope text-blue-500 text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Especialidad</label>
                                <select id="specialty" name="specialty"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                    <option value="" disabled selected>Seleccionar especialidad</option>
                                    <option>Cardiología</option>
                                    <option>Dermatología</option>
                                    <option>Pediatría</option>
                                    <option>Oftalmología</option>
                                </select>
                            </div>
                        </div>
                        {/* Médico */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Médico</label>
                                <select id="doctor" name="doctor"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                    <option value="" disabled selected>Seleccionar médico</option>
                                </select>
                            </div>
                        </div>
                        {/* Calendario  */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <i className="fas fa-calendar-alt text-blue-500 text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha de la cita</label>

                                <div className="relative max-w-sm">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input id="datepicker-autohide" datepicker datepicker-autohide type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date"></input>
                                </div>
                            </div>
                        </div>
                        {/* Horario  */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <i className="fas fa-clock text-blue-500 text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">Horario</label>
                                <select id="schedule" name="schedule"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                    <option value="" disabled selected>Seleccionar horario</option>
                                    <option>08:00 AM - 10:00 AM</option>
                                    <option>10:00 AM - 12:00 PM</option>
                                    <option>02:00 PM - 04:00 PM</option>
                                </select>
                            </div>
                        </div>
                        {/* Nombre */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <i className="fas fa-user text-blue-500 text-2xl"></i>
                            </div>
                            <div className="w-full">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                                <input type="text" id="name" name="name"
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"></input>
                            </div>
                        </div>
                        {/* Botón  */}
                        <div>
                            <button type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Enviar Solicitud
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}