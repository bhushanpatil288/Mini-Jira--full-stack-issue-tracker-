import { navList1 } from "../../../../constants"

const NavList = () => {
  return (
    <ul>
      {navList1.map((item, i) => {
        return (
          <li key={i} className="flex px-1 py-1 hover:bg-gray-100 cursor-pointer rounded-lg justify-between items-center">
            <div className="flex gap-1">
              <item.icon size={20} />
              <p>{item.title}</p>
            </div>
            <div className="flex gap-2">

              {item.plus
                ?
                <div className="hover:bg-gray-200 p-1 rounded-lg">
                  <item.plus size={20} color="gray" />
                </div>
                : ""}

              {item.more ? <item.more size={20} color="gray" /> : ""}

              {item.actions
                ?
                <div className="hover:bg-gray-200 p-1 rounded-lg">
                  <item.actions size={20} />
                </div>
                : ""}
            </div>

          </li>
        )
      })}
    </ul>
  )
}

export default NavList