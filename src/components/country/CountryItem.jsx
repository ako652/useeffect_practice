import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function CountryItem({element}) {
  let result = Object.keys(element.languages)
  console.log(result)
  return <div >
       <div>name :{element.name.common}</div>
       <div>region : {element.region}</div>
       <div>
       <a href={element.maps.googleMaps} target="_blank"  className="text-3xl font-bold underline"  rel="noreferrer" > visit map here</a>
       <img src={element.flags.png} alt="flags" className="w-16" />
       <ul>
        { element.borders
    ? element.borders.map((item) => (
        <ul key={uuidv4()}>
          <li>{item}</li>
        </ul>
      ))
    : "no borders"
        }
       </ul>
       <p>
       languages :{result.map((item)=> item ) + '\n'} 
       </p>
       </div>
        </div>;
}
