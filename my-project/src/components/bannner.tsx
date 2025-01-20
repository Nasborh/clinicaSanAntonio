import imgservicios from '../assets/serviciospage.jpg'
import imgNosotros from '../assets/nosotrospage.jpg'
const imagesBannerArray = [imgservicios, imgNosotros]


export function Banner({page}:{page:number}){
    const imageBanner = imagesBannerArray[page];
    
    return(
        <article className="items-center justify-center w-full h-64 " >
                <aside className="items-center justify-center">
                        <img src={imageBanner} className="w-full"></img>
                
                </aside>
            </article>
    )
}