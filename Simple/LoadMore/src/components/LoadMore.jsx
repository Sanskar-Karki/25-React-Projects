import { useEffect, useState } from "react"
import './styles.css'
const LoadMore = () => {

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  async function fetchProduct() {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)

      const result = await response.json()
      console.log(result)
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products])
        setLoading(false)
      }
    } catch (e) {
      console.log({ e })
      setLoading(false)
    }

  }
  useEffect(() => {
    fetchProduct()
    if (loading) {
      return <div>Loading data please wait</div>
    }
  }, [count])
  useEffect(() => {
    if (products && products.length === 40) {
      setDisableButton(true)
    }
  }, [products])

  return (
    <div className="container">
      <div className="product-container">
        {
          products && products.length ? (products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))) : null
        }
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
        {disableButton &&
          <div>
            <p>No Scrolling Left</p>
          </div>
        }
      </div>
    </div>

  )
}

export default LoadMore
