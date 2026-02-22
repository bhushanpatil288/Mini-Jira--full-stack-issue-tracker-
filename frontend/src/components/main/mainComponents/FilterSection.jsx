import { RiSearchLine, RiUserLine, RiMoreLine, RiEqualizer2Line, RiLineChartLine, RiFilter3Line } from "@remixicon/react";
import ButtonB from "../../common/ButtonB";

const FilterSection = () => {
  return (
    <div className='px-5'>
      <div className="flex items-center mt-5 justify-between">

        <div className="flex gap-2">
          <div className='border border-gray-500 rounded flex gap-2'>
            <div className="p-1 text-gray-600">
              <RiSearchLine size={20} />
            </div>
            <input type="text" placeholder='Search backlog' className='w-full' />
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-200 rounded-2xl p-1 text-gray-600">
              <RiUserLine size={20} />
            </div>
          </div>
          <div>
            <ButtonB icon={RiFilter3Line} text={"Filter"}/>
          </div>
        </div>

        <ul className="flex gap-2">
          <li>
            <ButtonB icon={RiLineChartLine} size={16} />
          </li>
          <li>
            <ButtonB icon={RiEqualizer2Line} size={16} />
          </li>
          <li>
            <ButtonB icon={RiMoreLine} size={16} />
          </li>
        </ul>

      </div>
    </div>
  )
}

export default FilterSection