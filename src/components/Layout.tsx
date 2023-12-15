import Footer from "./Footer"
import Navbar from "./Navbar"
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <div className="h-min-screen">
    <Navbar/>
    <main className="pt-16 h-full">
        <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Layout