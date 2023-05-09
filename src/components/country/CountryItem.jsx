import React from "react";

export default function CountryItem({element}) {
  return <div >
       <div>name :{element.name.common}</div>
       <div>region : {element.region}</div>
       <div>
       <a href={element.maps.googleMaps} target="_blank"  className="text-3xl font-bold underline"> visit map here</a>
       <img src={element.flags.png} alt="flags" className="w-16" />
       <ul>
        { element.hasOwnProperty("borders")
    ? element.borders.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))
    : ""
        }
       </ul>
       </div>
        </div>;
}
