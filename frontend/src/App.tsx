
import './App.css'
import { HomeIcon } from './components/icons/HomeIcon'
import { Sidebar } from './components/Sidebar'
import { Button } from './components/ui/Button'
import { SidebarSelector } from './components/ui/SidebarSelector'

function App() {

  return (
    <div className='bg-black w-screen h-screen text-white'>
    <div>
      <div className='flex justify-between px-4 py-2'>
        <h2 className='text-2xl font-semibold'>MovieMan</h2>
        <Button size='sm' title='Login'/>
      </div>
    <Sidebar/>
    </div>
    </div>
  )
}

export default App
