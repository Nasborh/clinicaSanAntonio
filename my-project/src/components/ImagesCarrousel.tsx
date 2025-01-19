import  Image1  from "../assets/image1.jpg";
import  Image2  from "../assets/image2.jpg";
import  Image3  from "../assets/image3.jpg";
const images = [Image1, Image2, Image3];


export function ImagesCarrousel ({ property }: { property: number }) {
    const src = images[property-1]
    return (
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src={src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
    </div>
    )
}

export function ButtonCarousel({Number}: {Number: number}) {

    return (
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label={"Slide " + Number} data-carousel-slide-to={Number}></button>
    
    )
}