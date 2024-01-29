import NavBar from "../header/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import "../../App.css"
import { useEffect } from "react"
import Aos from "aos"

const Layout = () => {
  useEffect(() => {
    Aos.init()
  }, [])
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
