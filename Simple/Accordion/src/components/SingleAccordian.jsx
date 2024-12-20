import { useState } from "react"
import accordionData from "./data"

const SingleAccordian = () => {
  const [selected, setSelected] = useState(null)
  const handleClick = (dataIndex) => {
    setSelected(dataIndex === selected ? null : dataIndex)
  }
  console.log(selected)
  return (
    <div>
      <div className="wrapper">
        <div className="accordian">
          {
            accordionData && accordionData.length > 0 ? (accordionData?.map((data) => {
              return (
                <div className="item " style={{ cursor: "pointer" }} key={data.id} onClick={() => handleClick(data.id)}>
                  <div className="title">
                    <h3 >
                      {data.question}
                    </h3>
                    <span>+</span>
                  </div>
                  <div className='answer'>
                    {
                      selected === data.id ? <div className='content'> {data.answer}</div> : null
                    }
                  </div>
                </div>
              )
            })) : (

              <div>
                No Data
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SingleAccordian