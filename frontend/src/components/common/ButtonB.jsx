const ButtonB = ({icon:Icon, size=20}) => {
  return (
    <button className="ButtonB border border-gray-200 hover:bg-gray-200 p-2 rounded cursor-pointer transition-all linear">
      <Icon color = "#515358" size = {size} />
    </button>
  )
}

export default ButtonB