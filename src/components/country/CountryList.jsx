
import React, {useEffect , useState}from "react";
import axios from "axios";
import CountryItem from "./CountryItem";


export default function CountryList() {

  const [data, setData] = useState([])

  const [loading , setLoading] = useState(true)
const url ='https://restcountries.com/v3.1/all'

  useEffect(()=>{
   axios.get(url)
   .then((response)=> 

   {
    setLoading(false)
    setData(response.data.slice(0,20))
  })
   .catch((error)=> console.log(error))
  } ,[])
  return <div className="grid grid-cols-3  gap-4 bg-sky-500 ">
    {
      loading?<p>loading ...</p>:
      data.map((element) => {
        
        
        return <div className=" flex border-2 justify-center ">
               <CountryItem element={element}/>

              </div>
      
      })

    }
  </div>;
}
