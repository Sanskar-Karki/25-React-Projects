import { useState } from "react"
import { QRCode } from "react-qr-code"

const App = () => {

  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  function handleGenerateQrCode() {
    setQrCode(input)
    setInput('')
  }

  return (
    <div className=''>
      <h1>QR Code Generator</h1>
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' name="qr-code" placeholder="Enter your Url Here" />
        <button disabled={input && input.trim !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div>
        <QRCode
          className='QR'
          id="qr-code-value"
          value={qrCode}
          bgColor="#fff"
        />
      </div>
    </div>
  )
}

export default App
