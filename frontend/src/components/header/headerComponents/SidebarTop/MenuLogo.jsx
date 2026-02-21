import { RiApps2Line } from "@remixicon/react"
import ButtonBL from "../../../common/ButtonBL"
import { jiraIcon } from "../../../../constants"

const MenuLogo = () => {
  return (
    <div className="flex gap-3 items-center w-100">
      <ButtonBL icon={RiApps2Line} />

      <div className="flex justify-content-center items-center gap-1 p-1 hover:bg-gray-200 cursor-pointer transition-all linear rounded-xl">
        <div className="bg-blue p-[6px] rounded">
          <img src={jiraIcon} alt="" />
        </div>
        <p className="text-black font-bold text-sm">MJira</p>
      </div>

    </div>
  )
}

export default MenuLogo