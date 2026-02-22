import { RiSearchLine } from "@remixicon/react"
import Button from "../../../common/Button"

const SearchCreate = () => {
  return (
    <div className="w-full sm:w-6/12 xl:w-8/12">
      <div className="flex gap-3 item-center justify-start 2xl:justify-center 3xl:px-20">

        <div className="flex w-4/5 border-gray-500 rounded-md px-3 border item-center justify-center gap-2">
          <div className="flex justify-center items-center"><RiSearchLine size={20} color="gray" /></div>
          <input type="text" placeholder="Search" className="w-full outline-none" />
        </div>
        <div>
          <Button text={"+ Create"} />
        </div>
        
      </div>
    </div>
  )
}

export default SearchCreate