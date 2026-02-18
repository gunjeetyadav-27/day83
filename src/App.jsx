import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home  from './pages/Home'
import Products from './pages/Products'
import Productsdetails from './pages/Productsdetails'
import { Route, Routes } from 'react-router-dom'


const App = () => {


  return (
   
    <div className='pages'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
<Route path='/products/:id' element={<Productsdetails />} />
      </Routes>


    </div>
  )
}

export default App