import Tour from "./Tour"
import { useState } from "react"
const Tours = ({tours}) => {
        

  return (
    <div>
        {tours.map((tour,i)=>{
            return <Tour key={i} tour={tour} />
        }) }
    </div>
  )
}
export default Tours