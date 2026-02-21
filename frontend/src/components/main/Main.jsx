import Topbar from "./mainComponents/Topbar"
import Heading from "./mainComponents/Heading"
import Navigation from "./mainComponents/topbarComponents/Navigation"
import FilterSection from "./mainComponents/FilterSection"

const Main = () => {
  return (
    <section>
      <Topbar />
      <Heading />
      <Navigation />
      <FilterSection />
    </section>
  )
}

export default Main