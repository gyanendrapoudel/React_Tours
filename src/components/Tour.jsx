import { useState } from "react"

const Tour = ({tour}) => {

    
    const [readMore, setReadMore] = useState(true)
     const { id, image, info, name, price } = tour
  return (
    <>
    
      <div>
        <img src={image} alt={name} style={{ width: '200px' }} />
        <div>
          <h4>{name}</h4>
        </div>

        {readMore && (
          <div>
            {info.slice(0, 200)}...
            <button onClick={setReadMore(!readMore)}>ReadMore</button>
          </div>
        )}
      </div>
    </>
  )
}
export default Tour