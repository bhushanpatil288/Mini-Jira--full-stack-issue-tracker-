import { RiSearchLine, RiUserLine } from "@remixicon/react";

const FilterSection = () => {
  return (
    <div className='px-5'>
      <div className="flex items-center gap-2">

        <div className='border border-gray-500 rounded flex gap-2'>
          <div className="p-1 text-gray-600">
            <RiSearchLine size={20} />
          </div>
          <input type="text" placeholder='Search backlog' className='w-full' />
        </div>

        <div>
          <div className="bg-gray-200 rounded-2xl p-1 text-gray-600">
            <RiUserLine size={20} />
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default FilterSection