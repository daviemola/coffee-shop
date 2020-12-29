import React from "react"
import "./bootstrap.min.css"
import Navbar from "./Global/Navbar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
     {children}
    </>
  )
}

export default Layout
