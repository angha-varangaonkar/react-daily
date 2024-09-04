import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import ProductCardList from './Day4/ProductCardList'
import Navbar from './Day4/Navbar'
import Homepage from './Day5/Homepage'
import About from './Day5/About'
import Contact from './Day5/Contact'


function App() {
  return (
    <Router>
    <div>
      
      <Navbar/>
      <Routes >
         <Route path='/' element={<Homepage/>} ></Route>
         <Route path='/about' element={<About/>} ></Route>
         <Route path='/contact' element={<Contact/>} ></Route>
         <Route path='/Products' element={<ProductCardList/>} ></Route>
         
         
      </Routes>
      
    
     
    </div>
    </Router>
 
  )
}

export default App