import SidebarMid from "./headerComponents/SidebarMid/SidebarMid"
import SidebarTop from "./headerComponents/SidebarTop/SidebarTop"

const Header = () => {
  return (
    <header className="px-2 py-2 hidden sm:block">
      <div>
        <SidebarTop />
        <SidebarMid />
      </div>
    </header>
  )
}

export default Header   