
const Suggestions = ({ data, handleClick }) => {
  return (
    <ul style={{ cursor: "pointer" }}>
      {
        data && data.length > 0 ? (

          data.map((item, index) =>
          (<li key={index} onClick={handleClick}>
            {item}
          </li>)

          )
        )
          : null
      }
    </ul>
  )
}

export default Suggestions