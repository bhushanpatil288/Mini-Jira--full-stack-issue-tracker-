import { useState } from "react"
import { navigationList } from "../../../../constants/index.js"
import "./navigation.css"
const Navigation = () => {
  const [selected, setSelected ] = useState("Backlog")
  return (
    <div className="px-5 border-b border-gray-300 my-3">
      <ul className="flex gap-3 flex-wrap">
        {
          navigationList.map((item, i)=>{
            return (
              <li key ={i} onClick={()=>{setSelected(item.title)}}>
                <div className={`text-gray-600 flex gap-1 items-center hover:border-b-3 hover:text-blue-800 cursor-pointer transition linear ${selected === item.title ? "active" : ""}`}>
                  <item.icon size={20} />
                  {item.title}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Navigation