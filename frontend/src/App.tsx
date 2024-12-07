
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Button } from './components/ui/Button'
import { useContents } from './components/useContent'
import { Card } from './components/ui/Card'

function App() {

  const { contents, loading } = useContents();

  return (
    <div className='bg-black w-screen h-screen text-white'>
    <div>
      <div className='flex justify-between px-4 py-2'>
        <h2 className='text-2xl font-semibold'>MovieMan</h2>
        <Button size='sm' title='Login'/>
      </div>
      <div className='flex gap-5 overflow-hidden'>
        <Sidebar/>
        <div className='flex gap-4'>
        {contents.map((x) => <Card image={x.imageurl[0]} title={x.title} />)}
        </div>
      </div>
    </div>
    </div>
  )
}

export default App
