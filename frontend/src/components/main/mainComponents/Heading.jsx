import { natureIcon } from "../../../constants";
import { RiGroupLine, RiMoreLine, RiShareLine, RiFlashlightLine, RiFullscreenLine  } from "@remixicon/react";
import ButtonB from "../../common/ButtonB.jsx";

const Heading = () => {
  return (
    <div className="px-5 py-3">

      <p className="text-gray-500">Spaces</p>

      <div className="flex justify-between">

        <div className="flex gap-2 items-center">
          <div className="w-5 rounded overflow-hidden">
            <img src={natureIcon} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-xl">Your team</h1>
          </div>
          <div>
            <ButtonB icon={RiGroupLine} />
          </div>
          <div className="hover:bg-gray-200 p-1 rounded-lg cursor-pointer">
            <RiMoreLine size={20} />
          </div>
        </div>

        <div className="flex gap-2">
          <ButtonB icon={RiShareLine} />
          <ButtonB icon={RiFlashlightLine} />
          <ButtonB icon={RiFullscreenLine} />
        </div>

      </div>

    </div>
  )
}

export default Heading