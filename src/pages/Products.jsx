import React, { useContext } from 'react'
import { Productsdatacontext } from '../context/Productscontext'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Products = () => {

  const products = useContext(Productsdatacontext)

  let renderData = null

  if (products.length > 0) {
    renderData = products.map((elem) => {
      return (
      <Link
        key={elem.id}
        className='card'
        to={`/products/${elem.id}`}>
        <img src={elem.image} alt="" />
        <h1>{elem.title}</h1>
      </Link>
    )})
  }


  return (
    <div className='cards'>

      {renderData}

    </div>
  )

}
export default Products