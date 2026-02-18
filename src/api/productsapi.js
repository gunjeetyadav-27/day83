import axios from "axios"

export async function getData() {
    const response = await axios.get('https://fakestoreapi.com/products')
   return response.data
  }

  export async function getSelectedData(id) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
   return response.data
  }