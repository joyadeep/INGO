import { Button } from '@/components/ui/button'
import children from '../assets/images/children.svg'
const Home = () => {
  return (
    <div className="h-fit md:h-min-screen px-2 pb-10 md:px-10">
      <div className="h-fit md:h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Together we are changing the world.</h1>
          <p className="text-sm md:text-lg text-justify md:text-left tracking-tight mt-2 md:mt-10">Welcome to the Lintense, the leading charity offering you a chance to impact lives worldwide. With every charitable project, we prove that even small actions matter. </p>
          <Button variant={'primary'} className='mt-5 w-full  rounded-full md:w-52 shadow-xl shadow-blue-500/30 '>Learn More</Button>
        </div>
        <div className=" w-full bg-slate-400">
          <img src={children} alt="children"  />
        </div>
      </div>
    </div>
  )
}

export default Home