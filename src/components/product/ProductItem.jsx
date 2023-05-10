import React from "react";

export default function ProductItem({element}) {
  return <div>
         <div>name: {element.title}</div>
         <div>price :$ {element.price}</div>
         <img src={element.image} alt="flowers"  className="w-64"/>

          </div>;
}
