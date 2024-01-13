import { createBrowserRouter } from "react-router-dom"

import Layout from "../components/layout/Layout"
import Home from "../pages/Home"
import ErrorPage from "../components/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
])

export default router
