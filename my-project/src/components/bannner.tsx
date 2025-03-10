import imgservicios from '../assets/serviciospage.jpg'
import imgNosotros from '../assets/nosotrospage.jpg'
import imgCitas from '../assets/servicioscitas.jpg';
import imageBlog from '../assets/secciondeblog.jpeg';

const imagesBannerArray = [imgservicios, imgNosotros, imgCitas, imageBlog]


export function Banner({page}:{page:number}){
    const imageBanner = imagesBannerArray[page];
    
    return(
        <article className="items-center justify-center w-full h-auto " >
                <aside className="items-center justify-center">
                        <img src={imageBanner} className="w-full"></img>
                
                </aside>
            </article>
    )
}