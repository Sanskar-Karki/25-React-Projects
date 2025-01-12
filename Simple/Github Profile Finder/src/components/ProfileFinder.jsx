import { useEffect, useState } from "react"
import UserCard from "./Card"
import "./styles.css"

const ProfileFinder = () => {
  const [userName, setUserName] = useState('Sanskar-karki')
  const [githubData, setGithubData] = useState('')
  const [loading, setLoading] = useState(false)
  function handleSubmit() {
    fetchGithubUserData()
  }

  async function fetchGithubUserData() {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    if (data) {
      console.log(data)
      setGithubData(data)
      setLoading(false)
      setUserName("")
    }
  }

  useEffect(() => {
    fetchGithubUserData()
  }, [])

  if (loading) {
    return (
      <h1>Loading Data,Please wait</h1>
    )
  }
  return (
    <div className="main-body">
      <div className='github-profile-container'>
        <div className='input-wrapper'>
          <input onChange={(e) => setUserName(e.target.value)} value={userName} name="search-by-username" type="text" placeholder="Search Github Username..." />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <div>
        {githubData !== null ?
          <UserCard user={githubData} />
          : null
          }
          </div>
      </div>
    </div>
  )
}

export default ProfileFinder