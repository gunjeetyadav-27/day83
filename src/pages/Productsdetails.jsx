import React, { useContext,useState, useEffect } from 'react'
import { Productsdatacontext } from '../context/Productscontext'
import { useParams } from 'react-router-dom'
import { getSelectedData } from '../api/productsapi'

const productsdetails = () => {
  const productdata = useContext(Productsdatacontext)
  const {id} = useParams()
const [selecteddata, setselecteddata] = useState([])
async function importselecteddata(){
const data= await getSelectedData(id)
setselecteddata(data)
}
useEffect(()=>{
  importselecteddata()
},[])

  return (
    <div>
      <img src={selecteddata.image} alt="" />
      <h1>{selecteddata.title}</h1>
    </div>
  )
}

export default productsdetails