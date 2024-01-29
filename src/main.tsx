import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import "remixicon/fonts/remixicon.css"
import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"
import "aos/dist/aos.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
