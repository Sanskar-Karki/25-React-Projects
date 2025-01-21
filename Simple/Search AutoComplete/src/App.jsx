import { useEffect, useState } from "react"
import Suggestions from "./component/suggestions"

const App = () => {

  const [loading, setLoading] = useState()
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState('')

  async function fetchListOfUsers() {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json()
      // console.log(data.users)

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName))
        setLoading(false)
        setError(null)
      }
    } catch (err) {
      setLoading(false)
      console.log({ err })
      setError(error)
    }
  }
  function handleChange(e) {
    const query = e.target.value.toLowerCase()
    setSearchParam(query)
    if (query.length > 1) {
      const filteredData = users && users.length ? users.filter(i => i.toLowerCase().indexOf(query) > -1) : []
      setFilteredUsers(filteredData)
      setShowDropDown(true)
    }
    else {
      setShowDropDown(false)
    }
  }

  function handleClick(e) {
    setShowDropDown(false)
    setSearchParam(e.target.innerText)
    setFilteredUsers([])
  }

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  console.log(users, filteredUsers)
  return (
    <div className="search-autocomplete-container">
      {
        loading ? <h1>Loading Data ,Please Wait!!!</h1> : (

          <input type="text" onChange={handleChange} value={searchParam} name="search-users" placeholder="Search Users here...." />

        )
      }
      {
        showDropDown && <Suggestions  handleClick={handleClick} data={filteredUsers} />
      }
    </div>
  )
}

export default App
