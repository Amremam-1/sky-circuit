import NavBar from "../header/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import '../../App.css'
const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
