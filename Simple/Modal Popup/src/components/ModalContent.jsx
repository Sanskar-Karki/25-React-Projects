import "./Modal.css"
const ModalContent = ({ id, body, header, footer, onClose }) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <span onClick={onClose} className="close-modal-icon">&times;</span>
        <div className="header">
          <h1>{header ? header : 'Header'}</h1>
        </div>
        <div className="body">
          {body ? body : (
            <div><p>this is our Modal Body</p></div>
          )}
        </div>
        <div className="footer">
          <h2>
            {footer ? footer : (
              "Footer"
            )}
          </h2>
        </div>
      </div>
    </div >

  )
}

export default ModalContent