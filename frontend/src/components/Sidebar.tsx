import { BookmarkIcon } from "./icons/BookmarkIcon"
import { HomeIcon } from "./icons/HomeIcon"
import { MovieIcon } from "./icons/MovieIcon"
import { PopularIcon } from "./icons/PopularIcon"
import { TrendIcon } from "./icons/TrendIcon"
import { SidebarSelector } from "./ui/SidebarSelector"

export const Sidebar = () =>{
    return <div>
        <div className="w-1/6 p-2 max-h-screen  flex flex-col gap-5">
           <SidebarSelector startIcon={<HomeIcon/>} title='Home'/>
           <SidebarSelector startIcon={<TrendIcon/>} title='Trending'/>
           <SidebarSelector startIcon={<PopularIcon/>} title='Popular'/>
           <SidebarSelector startIcon={<MovieIcon/>} title='Movies'/>
           <SidebarSelector startIcon={<BookmarkIcon/>} title='Bookmark'/>
        </div>
    </div>
}