import art1 from '../assets/art1.jpg'
import art2 from '../assets/art2.jpg' 
import art3 from '../assets/art3.jpg' 
import art4 from '../assets/art4.jpg'
import art5 from '../assets/art5.jpg'
import art6 from '../assets/art6.jpg'
import art7 from '../assets/art7.jpg'
import art8 from '../assets/art8.jpg'
import art9 from '../assets/art9.jpg'
import art10 from '../assets/art10.jpg'
import art11 from '../assets/art11.jpg'
import art12 from '../assets/art12.jpg'
import art13 from '../assets/art13.jpg'
import art14 from '../assets/art14.jpg'
import art15 from '../assets/art15.jpg'
import art16 from '../assets/art16.jpg'

let imagearticles =[art1, art2,art3,art4,art5,art6,art7,art8,art9,art10,art11,art12,art13,art14,art15,art16]

export function Articulos({title, description, image}) {
  
    return (
        <a href="" className="mx-3 flex flex-col items-center bg-white border border-sky-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 h-auto">
            <img className="object-cover w-full rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg md:h-48 sm:h-32" src={imagearticles[image]} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 text-xl">{description}</p>
            </div>
        </a>

    )
}