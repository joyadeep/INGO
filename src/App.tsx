import {Routes,Route} from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Donation from './pages/Donation'
import Shop from './pages/Shop'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>}/>
        <Route path='donation' element={<Donation/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
      <Route path='/auth' element={<Login/>} />
     </Routes>
    </>
  )
}

export default App
