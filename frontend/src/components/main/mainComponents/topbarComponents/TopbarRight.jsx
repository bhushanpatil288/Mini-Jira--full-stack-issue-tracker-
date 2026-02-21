import { RiVipDiamondLine, RiNotification2Line, RiSettings4Line, RiQuestionLine } from "@remixicon/react"
import ButtonBL from "../../../common/ButtonBL"

const TopbarRight = () => {
  return (
    <div className="w-full sm:w-4/12 xl:w-2/12 flex items-center justify-center mt-3 sm:mt-0 sm:justify-end">
      <div className="flex items-center justify-end">
        <button className="border border-blue-700 whitespace-nowrap border-1 rounded-md px-2 py-1 flex gap-3 text-blue-700 hover:bg-blue-200 cursor-pointer transition">
          <div className="flex justify-center items-center">
            <RiVipDiamondLine size={20} />
          </div>
          <p className="m-0">See plans</p>
        </button>

        <div className="text-gray-500 flex">
          <ButtonBL icon={RiNotification2Line} size={20} />
          <ButtonBL icon={RiQuestionLine} size={20} />
          <ButtonBL icon={RiSettings4Line} size={20} />
        </div>

      </div>
    </div>

  )
}

export default TopbarRight