
interface buttonProps{
    size: "sm" | "md" | "lg"
    onClick?: ()=>void,
    title: string
}



const buttonVariants = {
    "sm" : "px-6 py-2",
    "md" : "px-8 py-3",
    "lg" : "px-8 py-5"
}

export const Button = ({onClick, title, size}:buttonProps) =>{
    return <div>
        <div className={`${buttonVariants[size]}`+ " bg-white cursor-pointer text-black rounded-md max-w-fit"} onClick={onClick}>{title}</div>
    </div>
}