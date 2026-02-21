import Header from "./components/header/Header"
import Main from "./components/main/Main"

const App = () => {
  return (
    <div className="flex">
      <div className="hidden sm:block sm:w-2/7 xl:w-1/7 border-e border-gray-300">
        <Header /> 
      </div>
      <div className="w-full sm:w-5/7 xl:w-6/7 border-b border-gray-300">
        <Main />
      </div>
    </div>
  )
}

export default App