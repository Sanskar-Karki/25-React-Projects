import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "../index.css"

const StarRating = ({ numberOfStars = 5 }) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
    console.log(getCurrentIndex)

  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex)
    console.log(getCurrentIndex)

  }
  function handleMouseLeave(getCurrentIndex) {
    setHover(rating)
    console.log(getCurrentIndex)

  }
  return (
    <div className="star--rating">
      {
        [...Array(numberOfStars)].map((_, index) => {
          index += 1
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
            />
          )
        })
      }

    </div>
  )
}

export default StarRating