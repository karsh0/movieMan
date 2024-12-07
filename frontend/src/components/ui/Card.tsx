
interface cardProps{
    image:string
    title:string
}

export const Card = ({image, title}: cardProps) =>{
    return <div className="p-3 w-56 max-w-72">
        <div>
            <img className="rounded-xl w-56" src={image} alt="" />
            <h2 className="text-xl text-white font-semibold text-wrap">{title}</h2>
        </div>
    </div>
}