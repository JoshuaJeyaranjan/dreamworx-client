import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import BodyWorkPage from './pages/BodyWorkPage/BodyWorkPage'
import CarePage from './pages/CarePage/CarePage'
import ContactPage from './pages/ContactPage/ContactPage'
import CustomizePage from './pages/CustomizePage/CustomizePage'
import MechanicalPage from './pages/MechanicalPage/MechanicalPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <HomePage/>} /> 
      <Route path='/home' element={ <HomePage/>} /> 
      <Route path='/about' element={ <AboutPage/>} />
      <Route path='/bodywork' element={ <BodyWorkPage/>} />
      <Route path='/care' element={ <CarePage/>} />   
      <Route path='/contact' element={ <ContactPage/>} /> 
      <Route path='/customize' element={ <CustomizePage/>} /> 
      <Route path='/mechanical' element={ <MechanicalPage/>} /> 
      <Route path='/services' element={ <ServicesPage/>} />  
      </Routes>  
    </BrowserRouter>
  )
}

export default App
