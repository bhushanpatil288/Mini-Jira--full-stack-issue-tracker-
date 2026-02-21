const ButtonBL = ({icon:Icon, size=20}) => {
  return (
    <button className="ButtonBL hover:bg-gray-200 p-2 rounded cursor-pointer transition-all linear">
      <Icon color = "#515358" size = {size} />
    </button>
  )
}

export default ButtonBL