// day1:
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Day1/card'

function App() {
 
  return (
    <div>
      <Card/>
    </div>
    
  )
}

// export default App


// day2:

import React from 'react'
import Mydata from './Day2/Mydata'

function App() {
 const array=[{
  name:"IPhone", 
  productprice:"3500", 
  product:"electronics",
  description:"very useful and nice product "

 },
 {
  name:"Samsung", 
  productprice:"6500", 
  product:"electronics",
  description:"very useful and nice product "

 },
 {
  name:"Moto", 
  productprice:"500", 
  product:"electronics",
  description:"very useful and nice product "

 }
]

return(
  <div>

    {
      array.map((value)=>(
        <Mydata pname={value.name} pprice={value.productprice}
        pproduct={value.product} pdescription={value.description} />
        
          
      ))
      
    }




  </div>
)
}

export default App

// day3:


