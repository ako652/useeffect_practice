import React, {useEffect,useState} from "react";
import ProductItem from './ProductItem'


export default function ProductList() {
  const url ='https://fakestoreapi.com/products'

  const [data,setData] =useState([])
  const [loading, setLoading]=useState(true)
  const [value, setValue] = useState('')
  const [filter, setFilters]=useState(data)


  function onchangekey(event){
    setValue(event.target.value.toLowerCase())
  }

  const onsubmitkey=(event)=>{
     event.preventDefault()

     
  }

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((json)=>{
      setLoading(false)
      setData(json)
    })
    const filter =data.filter((element) => element.title.toLowerCase().includes(value))
     setFilters(filter)
  },[value,data])
  return <div> 
    <h1>ProductList Topic </h1>
       <form  onSubmit={onsubmitkey}>
        <label >
        search: <input 
          type="text"
          value={value}
          onChange={onchangekey}
         />
         </label>
         <button type="submit"> enter</button>
         </form>
         <div className="grid grid-cols-3 border-2 bg-indigo-500">
      
      {
        loading?<p>loading...</p> : filter.map((element) => {
          return <ProductItem element={element} key={element.id}/>
        })
      }
        </div>;

          </div>
  
}
