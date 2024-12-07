
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Button } from './components/ui/Button'
import { useContents } from './components/useContent'
import { Card } from './components/ui/Card'
import { useBanner } from './components/useBanner'

function App() {

  const { contents, loading } = useContents();
  const  banners = useBanner()

   console.log(banners)

  return (
    <div className='bg-black w-full h-full overflow-hidden text-white'>
    <div>
      <div className='flex justify-between px-4 py-2'>
        <h2 className='text-2xl font-semibold'>MovieMan</h2>
        <Button size='sm' title='Login'/>
      </div>
      <div className='flex gap-5 overflow-hidden'>
        <Sidebar/>
        <div>
          <div className='relative w-[87vw] h-[60vh] mt-4 mb-10 rounded-xl overflow-hidden bg-white'><img className='w-full' src="https://m.media-amazon.com/images/M/MV5BNzU1ZTE4YzAtOWNkYi00YWE4LThmY2YtMDNlYzU2ZTgxYTc2XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="" />
          <div className='absolute top-[50%] left-16 flex flex-col gap-2'>
            <h2 className='text-3xl text-white font-bold'>title</h2>
            <h1 className='text-xl text-white'>description</h1>
            <Button title='Watch Now' size='md'/>
          </div>
          </div>
        <div className=' flex gap-5'>
        {contents.map((x) => <Card image={x.imageurl[0]} title={x.title} />)}
        {/* <button className='absolute text-xl bg-white text-black p-2 top-0 right-0 z-1'>SCROLL</button> */}
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App


