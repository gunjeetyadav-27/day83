import React, { createContext, useContext, useState, useEffect} from 'react'
export const Productsdatacontext=createContext()
import axios from 'axios'
import { getData } from '../api/productsapi'
const Productscontext = (props) => {
   const [products, setproducts] = useState([])

 async function setdata(){
  const data= await getData()
     console.log(data)
  setproducts(data)

 }


useEffect(()=>{
  setdata()
},[])


  return (
    <Productsdatacontext.Provider value={products}>
     {props.children}
    </Productsdatacontext.Provider>
  )
}

export default Productscontext