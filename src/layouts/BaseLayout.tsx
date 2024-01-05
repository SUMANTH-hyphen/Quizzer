import { Outlet } from "react-router-dom"
import NavBar from "../components/ui/NavBar"


const BaseLayout = () => {
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <main>
          <Outlet/>
      </main>
    </div>
  )
}

export default BaseLayout