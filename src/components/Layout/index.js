import React from "react"
import Footer from "../Footer"

import GlobalStyled from "./global"

const Layout = ({ children }) => (
  <>
    <GlobalStyled />
    {children}
    <Footer />
  </>
)

export default Layout
