import SearchCreate from "./topbarComponents/SearchCreate"
import TopbarRight from "./topbarComponents/TopbarRight"

const Topbar = () => {
  return (
    <div className="flex justify-between px-5 border-b border-gray-300 py-2 items-center flex-wrap">

      <SearchCreate />

      <TopbarRight />
      
    </div>
  )
}

export default Topbar