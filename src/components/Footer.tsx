import { Link } from "react-router-dom"


const links=[
  {
    name:"Who are we",
    href:"#"
  },
  {
    name:"Our Mission",
    href:"#"
  },
  {
    name:"How we work",
    href:"#"
  },
  {
    name:"Contact",
    href:"#"
  }
]

const social=[
  {
    name:"Facebook",
    href:"#"
  },
  {
    name:"Instagram",
    href:"#"
  },
  {
    name:"Tiktok",
    href:"#"
  }
]
const Footer = () => {
  return (
    <div className="h-fit p-10 flex gap-3 bg-black text-white">
      <div className="w-2/4">
      <p className='w-fit text-3xl font-black text-white'>Logo<span className='text-3xl text-rose-600'>.</span> </p>
        <p className="pt-2">Charity and Dontaion</p>
        <div className="flex flex-col gap-1 pt-5">
        <p>Sundhara,Kathmandu</p>
        <p>+977-01-xxxxxxx</p>
        <p>test.foundation@test.com</p>
        </div>
      </div>
      <div className="w-1/4 flex flex-col gap-4">
       
        {
          links.map((link)=>(
            <Link to={link.href} className="cursor-pointer transition hover:text-slate-200 hover:underline hover:underline-offset-4">{link.name}</Link>
          ))
        }
      </div>
      <div className="w-1/4 flex flex-col gap-4">
      {
          social.map((link)=>(
            <Link to={link.href} className="cursor-pointer transition hover:text-slate-200 hover:underline hover:underline-offset-4">{link.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default Footer