const Button = ({text}) => {
  return (
    <button className="bg-blue-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-700 transition whitespace-nowrap">
      <p>{text}</p>
    </button>
  )
}

export default Button