import { useEffect, useState } from "react"
import axios from "axios"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';


const ImageSlider = ({ url, page, limit }) => {

  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true)
      const response = await axios.get(`${getUrl}?page=${page}&limit=${limit}`)
      const data = response.data
      if (data) {
        setImages(data)
        setLoading(false)
      }
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }


  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url)
    }
    console.log(images)

    if (loading) {
      return <div >Loading data please wait</div>
    }
    if (error) {
      return <div>Error occured{error}</div>
    }
  }, [url])
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
      {images && images.length ?
        images.map((imageItem, index) => (
          <img src={imageItem.download_url} key={imageItem.id} className={currentSlide === index ? 'current-image' : 'hide-current-image'} />)
        )
        : null}
      <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
      <span className="circle-indicators">
        {images && images.length ?
          images.map((_, index) =>
          (
            <button key={index} className={currentSlide === index ? 'current-indicator' : ' inactive-indicator'} onClick={() => setCurrentSlide(index)}></button>
          )
          ) : null
        }
      </span>
    </div>
  )
}

export default ImageSlider