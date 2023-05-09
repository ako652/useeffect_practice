import React, {useEffect,useState} from "react";
import ProductItem from './ProductItem'

export default function ProductList() {
  const url ='https://fakestoreapi.com/products'

  const [data,setData] =useState([])
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>{
      setLoading(false)
      setData(json)
    })
  },[])
  return <div className="grid grid-cols-3 border-2 bg-indigo-500">
      {
        loading?<p>loading...</p> : data.map((element) => {
          return <ProductItem element={element} key={element.id}/>
        })
      }
        </div>;
}
