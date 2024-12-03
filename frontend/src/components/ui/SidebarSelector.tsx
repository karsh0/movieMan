import { ReactElement } from "react"

interface selectorProps{
    startIcon? : ReactElement,
    title : string,
    fullWidth?: boolean
}

export const SidebarSelector = ({startIcon, title, fullWidth}: selectorProps) =>{
    return <div>
        <div className={"text-white cursor-pointer flex justify-start gap-4 px-2 py-3 rounded-md max-w-48 hover:bg-gray-800 " + `${fullWidth ? 'w-full ': ''}`}>
            <div>{startIcon}</div>
            <div>{title}</div>
        </div>
    </div>
}