const ButtonB = ({icon:Icon, size=16, text, variant, style}) => {
  return (
    <button className={`ButtonB flex items-center gap-2 border ${variant === "blue" ? "border-blue-500 hover:bg-blue-200 text-blue-500" : "border-gray-300 hover:bg-gray-200 text-gray-500"}  ${text ? "px-2 py-1" : "p-2"} rounded cursor-pointer transition-all linear`}>
      {Icon ? <Icon color = "#515358" size = {size} /> : ""}
      {text ? 
        <p className={`${style}`}>{text}</p>
      : ""}
    </button>
  )
}

export default ButtonB