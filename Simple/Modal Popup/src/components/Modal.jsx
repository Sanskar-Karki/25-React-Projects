import { useState } from "react"
import ModalContent from "./ModalContent"

const Modal = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }
  function onClose() {
    setShowModalPopup(false)
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Show Modal
      </button>
      {
        showModalPopup &&
        <ModalContent onClose={onClose}
          header={
            <div>Customized Header</div>
          }
          body={
            <div>Customized Body</div>
          }
          footer={
            <div>Customized Footer</div>
          }
        />
      }
    </div>
  )
}

export default Modal