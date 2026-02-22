import Topbar from "./mainComponents/Topbar"
import Heading from "./mainComponents/Heading"
import Navigation from "./mainComponents/topbarComponents/Navigation"
import FilterSection from "./mainComponents/FilterSection"
import IssuesTable from "./mainComponents/IssuesTable"

const Main = () => {
  return (
    <section>
      <Topbar />
      <Heading />
      <Navigation />
      <FilterSection />
      <IssuesTable />
    </section>
  )
}

export default Main