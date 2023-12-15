import { Button } from '@/components/ui/button'
import children from '../assets/images/children.svg'
const Home = () => {
  return (
    <div className="h-min-screen px-10">
      <div className="h-screen flex items-center gap-10">
        <div className="w-full">
          <h1 className="text-6xl font-bold tracking-tighter">Together we are changing the world.</h1>
          <p className="text-lg tracking-tight mt-10">Welcome to the Lintense, the leading charity offering you a chance to impact lives worldwide. With every charitable project, we prove that even small actions matter. </p>
          <Button variant={'primary'} className='mt-5 rounded-full w-52 shadow-xl shadow-blue-500/30 '>Learn More</Button>
        </div>
        <div className="w-full">
          <img src={children} alt="children"  />
        </div>

      </div>
    </div>
  )
}

export default Home