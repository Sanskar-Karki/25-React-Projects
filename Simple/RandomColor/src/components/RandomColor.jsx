import { useEffect, useState } from "react"

const RandomColor = () => {

  const [typeOfColor, setTypeOfColor] = useState('rgb')
  const [color, setColor] = useState('#000000')

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') {
      handleCreateRandomRgbColor()
    } else {
      handleCreateRandomHexColor()
    }
  }, [typeOfColor])

  const handleCreateRandomHexColor = () => {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', "D", 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hexArray[randomColorUtility(hexArray.length)]
    }
    setColor(hexColor)
    console.log(hexColor)
  }
  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
    console.log(color)
  }

  return (
    <>
      <div style={{
        width: "100vw",
        height: " 100vh",
        background: color
      }} className="container">
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: '50px', color: "white", fontSize: "20px" }}>
          <h3>{typeOfColor === 'rgb' ? 'RGB Color ' : 'HEX Color '}</h3>
          <h3>{color}</h3>
        </div>
      </div></>
  )
}

export default RandomColor

// #123455
// rgb(12,34,99)