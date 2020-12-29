import React from "react"
import "./bootstrap.min.css"
import Footer from "./Global/Footer"
import Navbar from "./Global/Navbar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
