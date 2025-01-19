export function Servicios({ isOpen }){
    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : 'mt-2'}`} >
            <h1>Hola, soy Servicios</h1>
        </section>
    )
}