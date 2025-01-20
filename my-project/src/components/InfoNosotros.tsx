

export function CardNosotros({ tittle, content }) {

    return (
        <div className="w-1/2 mx-auto ">
            <h1 className="font-bold text-sky-500 text-2xl">{tittle}</h1>
            <p className="text-justify text-lg text-gray-600 my-2">{content}</p>
        </div>
    )


}

export function Parrafos({ Content }) {
    return (
        <p className="text-justify text-lg text-gray-600 my-2">{Content}
        </p>

    )

}