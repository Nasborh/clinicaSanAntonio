import { Banner } from "../components/bannner"
import { TargetsNosotros } from "../components/targetsNosotros"


export function Nosotros({ isOpen }) {
    return (
        <section className={`flex flex-col ${isOpen ? 'mt-16' : ''}`}>
            <Banner page={1} />
            <div className="mx-auto bg-sky-100">
                <aside className="flex flex-row grid gap-4 my-8 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 justify-center">
                    <div className="w-full text-center mx-auto">
                        <h1 className="font-bold text-blue-900 text-7xl">CONÓCENOS</h1>
                        
                    </div>
                    
                </aside>

                <aside className="mx-auto bg-sky-100">
                    <TargetsNosotros Pos={"1"} Ser={"0"}/>
                    <TargetsNosotros Pos={"2"} Ser={"1"}/>
                    <TargetsNosotros Pos={"1"} Ser={"2"}/>
                    <TargetsNosotros Pos={"2"} Ser={"3"}/>
                    <TargetsNosotros Pos={"1"} Ser={"4"}/>
                </aside>
            </div>
        </section>
    )
}