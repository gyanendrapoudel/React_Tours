import { useState } from "react"

const Tour = ({tour}) => {

    const [readMore, setReadMore] = useState(true)
     const { id, image, info, name, price } = tour
  return (
    <>
      
      <div className="shadow p-2 rounded-3" style={{ position: 'relative' }}>
        <img
          src={image}
          alt={name}
          className="object-fit-cover rounded"
          style={{ width: '100%', height: '200px' }}
        />
        <div>
          <span
            className="text-white bg-success p-2 "
            style={{
              borderTopRightRadius: '0.25rem',
              position: 'absolute',
              top: '9px',
              right: '8px',
            }}
          >
            ${price}
          </span>
          <h4 className="pt-3">{name}</h4>
        </div>

        {readMore ? (
          <p className="">
            {info.slice(0, 200)}...
            <button
              className="btn text-success ms-2 "
              onClick={() => setReadMore(!readMore)}
            >
              ReadMore
            </button>
          </p>
        ) : (
          <p>
            {info}
            <button
              className="btn text-success ms-2"
              onClick={() => setReadMore(!readMore)}
            >
              ShowLess
            </button>
          </p>
        )}

        <div className="pb-3">
          <button className="btn btn-light w-100 text-success border border-success">
            Not Interested
          </button>
        </div>
      </div>
    </>
  )
}
export default Tour