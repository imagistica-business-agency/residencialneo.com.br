import React from "react"

import GlobalStyled from "./global"

import Nav from "../Nav"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <>
    <GlobalStyled />
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
