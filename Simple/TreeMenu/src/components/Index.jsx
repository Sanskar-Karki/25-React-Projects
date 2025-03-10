import MenuList from "./menu-list"
import "./styles.css"

const Index = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  )
}

export default Index