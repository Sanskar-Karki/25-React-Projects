import { useState } from "react"
import accordionData from "./data"

const MultiAccordian = () => {

  const [multiSelection, setMultiSelection] = useState([])

  const handleClick = (dataIndex) => {
    const multiArray = [...multiSelection]
    const findIndexOfCurrent = multiArray.indexOf(dataIndex)
    console.log(findIndexOfCurrent)
    if (findIndexOfCurrent === -1) {
      setMultiSelection([...multiSelection, dataIndex])
    } else {
      setMultiSelection(multiArray.filter((item) => item !== dataIndex))
    }
  }
  console.log(multiSelection)

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
                    <span style={{ fontSize: "25px" }}>{multiSelection === data.id ? "-" : "+"}</span>
                  </div>
                  <div className='answer'>
                    {
                      multiSelection.indexOf(data.id) !== -1 ? <div className='content'> {data.answer}</div> : null
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

export default MultiAccordian