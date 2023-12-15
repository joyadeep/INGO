import { NavLink } from 'react-router-dom'
import { AlignLeft } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent } from './ui/sheet'

const routes=[
    {
        name:"Home",
        href:"/"
    },
    {
        name:"About",
        href:"/about"
    },
    {
        name:"Contact",
        href:"/contact"
    },
    {
        name:"Donation",
        href:"/donation"
    },
    {
        name:"Shop",
        href:"/shop"
    }
]
const Navbar = () => {
 const [isOpen,setIsOpen]=useState(false);
 const toggle=()=>{
    setIsOpen((preval)=>!preval);
 }  

  return (
    <div className="h-12 md:h-16 bg-white fixed top-0 z-50 w-full flex items-center justify-between px-2 md:px-5">
       <div className='flex  gap-2 items-center'>
        <AlignLeft className='block md:hidden right-0' onClick={()=>toggle()} />
       <p className='w-fit text-3xl font-black text-slate-700'>Logo<span className='text-3xl text-rose-600'>.</span> </p>
       </div>

        <div className='hidden md:flex gap-5 text-md text-slate-800'>
            
            {routes.map((route)=>(
                <NavLink key={route.href} to={route.href}  className={({ isActive, isPending }) =>
                isPending ? "text-slate-200" : isActive ? "text-purple-500 underline underline-offset-8" : "hover:text-slate-400"
              } >{route.name}</NavLink>
            ))}
        </div>
        <Sheet open={isOpen} onOpenChange={toggle}>
        <SheetContent side="right" className='p-2 pt-10'>
        <div className='flex flex-col gap-5 text-md text-slate-800'>
        <p className='w-fit text-3xl font-black text-slate-700'>Logo<span className='text-3xl text-rose-600'>.</span></p>
            {routes.map((route)=>(
                <NavLink key={route.href} to={route.href}  className={({ isActive, isPending }) =>
                isPending ? "text-slate-200" : isActive ? "text-lg text-purple-500 underline underline-offset-8" : "hover:text-slate-400"
              } >{route.name}</NavLink>
            ))}
        </div>
            </SheetContent>
        </Sheet>

    </div>
  )
}

export default Navbar