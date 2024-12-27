import Index from "./components"
import menus from "./components/data"

const App = () => {
  return (
    <div>
      <Index menus={menus} />
    </div>
  )
}

export default App
