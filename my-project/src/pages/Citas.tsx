import { useState } from 'react'
import { Banner } from "../components/bannner"
import axios from "axios";
import { get } from 'http';

interface CitasProps {
    isOpen: boolean;
}

export function Citas({ isOpen }: CitasProps) {

    // Obtener Especialidades
    const [specialties, setSpecialties] = useState([]);
    const getSpecialties = async () => {
        try {
            const response = await axios.get('http://localhost:3000/especialidades');
            console.log(response);
            setSpecialties(response.data.especialidades);
        } catch (error) {
            console.error(error);
        }
    };

    const [formData, setFormData] = useState({
        specialty: '',
        doctor: '',
        date: '',
        schedule: '',
        name: '',
        last_name: '',
        gender: '',
        born: '',
        identity_numb: '',
        phone: '',
        email: ''
    })


    //Elección de la especialidad del médicos
    // Obtener Especialidad del Medicos
    const [doctorSpecialty, setDoctorSpecialty] = useState([]);
    if (formData.specialty !== '') {
        // Obtenemos el id de la especialidad del médico seleccionado
        axios.get(`http://localhost:3000/medicos/${formData.specialty}`)
            .then(response => {
                console.log(response);
                setDoctorSpecialty(response.data.especialidad_medico);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formData)
        axios.post('http://localhost:3000/api', formData)
            .then(response => {
                console.log('Datos enviados: ', response.data);
                return response.data.json();
            })
            .catch(error => {
                console.error(error);
            });
    };

    // ... Resto del componente

    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : 'mt-0'}`} >
            <Banner page={2} />
            <div className="min-h-screen bg-gray-100">
                {/* Encabezado  */}
                <div className="relative bg-sky-500 text-white">
                    <div className="absolute inset-0 bg-cover bg-center"
                        Style={"background-image: url('../assets/imagen_clinica.jpg')"}></div>
                    <div className="relative bg-opacity-75 bg-sky-500 p-6 text-center">
                        <h1 className="text-4xl font-bold">Clínica San Antonio</h1>
                        <p className="text-lg mt-2">Solicita tu cita en línea de manera rápida y sencilla</p>
                    </div>
                </div>

                {/* htmlFormulario */}
                <div className="container mx-auto py-12 px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Formulario de Solicitud de Cita</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Especialidad  */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-stethoscope text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="specialty" className="block text-sm font-semibold text-sky-500">Especialidad</label>
                                    <select id="specialty" name="specialty" required
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
                                        onClick={getSpecialties} onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}>
                                        <option value="" disabled selected>Seleccionar especialidad</option>
                                        {specialties.map((specialty: any) => (
                                            <option key={specialty["Id"]} value={specialty["Id"]}>{specialty["Nombre"]}</option>
                                        ))}
                                        {/* <option value={1}>Cardiología</option>
                                        <option value={2}>Dermatología</option>
                                        <option value={3}>Pediatría</option>
                                        <option value={4}>Oftalmología</option> */}
                                    </select>
                                </div>
                            </div>
                            {/* Médico */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-user-md  text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="doctor" className="block text-sm font-semibold text-sky-500">Médico</label>
                                    <select id="doctor" name="doctor" required onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2.5">
                                        <option value="" disabled selected>Seleccionar médico</option>
                                        {doctorSpecialty.map((doctor: any) => (
                                            <option key={doctor["Id"]} value={doctor["Id"]}>{doctor["Nombre"]} {doctor["Apellido"]}</option>
                                        ))}
                                        {/* <option value={1}>Lindimar Escobar</option>
                                        <option value={2}>Rodolfo Ramirez</option>
                                        <option value={3}>Gianni Imperato</option>
                                        <option value={4}>Maxiel Camacho</option> */}
                                    </select>
                                </div>
                            </div>
                            {/* Calendario  */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-calendar-alt text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="date" className="block text-sm font-semibold text-sky-500">Fecha de la cita</label>
                                    <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Select date">
                                    </input>
                                </div>
                            </div>
                            {/* Horario  */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-clock text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="schedule" className="block text-sm font-semibold text-sky-500">Horario</label>
                                    <select id="schedule" name="schedule" required value={formData.schedule} onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500">
                                        <option value="" disabled selected>Seleccionar horario</option>
                                        <option>08:00 AM - 10:00 AM</option>
                                        <option>10:00 AM - 12:00 PM</option>
                                        <option>02:00 PM - 04:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            {/* Nombre */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-user text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-sm font-semibold text-sky-500">Nombre</label>
                                    <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                    <input type="text" id="last_name" name="last_name" required value={formData.last_name} onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"></input>
                                </div>
                            </div>
                            {/* Sexo  */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fa fa-venus-mars text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="gender" className="block text-sm font-semibold text-sky-500">Sexo</label>
                                    <select id="gender" name="gender" required value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        className="mt-1 block w-full rounded-lg p-2.5 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                        <option value="" disabled selected>Sexo*</option>
                                        <option value={"M"}>Masculino</option>
                                        <option value={"F"}>Femenino </option>
                                    </select>
                                </div>
                            </div>
                            {/* Fecha de nacimiento */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-calendar-alt text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="born" className="block text-sm font-semibold text-sky-500">Fecha de Nacimiento</label>
                                    <input type="date" name="born" value={formData.born} onChange={(e) => setFormData({ ...formData, born: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Select date" required>
                                    </input>
                                </div>
                            </div>
                            {/* Cédula / Pasaporte */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-id-card text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="identity_numb" className="block text-sm font-semibold text-sky-500">Cédula / Pasaporte</label>
                                    <input type="number" id="identity_numb" name="identity_numb" min={1} max={999999999} value={formData.identity_numb} onChange={(e) => setFormData({ ...formData, identity_numb: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500" required></input>
                                </div>
                            </div>
                            {/* Teléfono */}
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 self-center">
                                    <i className="fas fa-phone text-sky-500 text-2xl"></i>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="block text-sm font-semibold text-sky-500">Teléfono</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                                    <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="Dirección de Correo Electrónico" required></input>
                                </div>
                            </div>
                            {/* Botón  */}
                            <div>
                                <button type="submit"
                                    className="w-full bg-sky-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    Enviar Solicitud
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >


    )
}