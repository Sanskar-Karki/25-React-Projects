import { useEffect, useState } from "react"
import './index.css'

const ScrollIndicator = ({ url }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [scroll, setScroll] = useState(0)

  async function fetchData(getUrl) {
    try {
      setLoading(true)
      const response = await fetch(getUrl)
      const data = await response.json()
      if (data && data.products && data.products.length > 0) {
        setData(data.products)
        setLoading(false)
      }
    } catch (e) {
      setErrorMessage(e.message)
    }
  }
  useEffect(() => {
    fetchData(url)
  }, [url])

  function handleScrollPercentage() {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop)
    // console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight)

    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScroll((howMuchScrolled / height) * 100)

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage)
    return () => {
      window.removeEventListener('scroll', () => { })
    }
  }, [])

  console.log(scroll)

  if (errorMessage) {
    return <div>Error!!! {errorMessage}</div>
  }

  if (loading) {
    return <div>Loading data please wiat</div>
  }

  return (
    <div className="container">
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar" style={{ width: `${scroll}%` }}>
          </div>
        </div>
      </div>
      <div className="data-container">
        {
          data && data.length > 0 ?
            data.map((data) => (
              <p key={Math.random}>{data.title}</p>
            )) : null
        }

      </div>
    </div>
  )
}

export default ScrollIndicator