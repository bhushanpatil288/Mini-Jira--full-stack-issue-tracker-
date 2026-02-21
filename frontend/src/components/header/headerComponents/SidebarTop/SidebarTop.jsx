import { RiSidebarFoldLine } from "@remixicon/react"
import ButtonBL from "../../../common/ButtonBL"
import MenuLogo from "./MenuLogo"

const SidebarTop = () => {
  return (
    <div className="flex justify-between items-center">
      <MenuLogo />

      <div>
        <ButtonBL icon={RiSidebarFoldLine} />
      </div>

    </div>
  )
}

export default SidebarTop