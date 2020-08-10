import React from 'react'

import GlobalStyled from './global'

import Nav from '../Nav'
import WhatsappIcon from '../WhatsappIcon'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyled />
    <Nav />
    <WhatsappIcon />
    {children}
    <Footer />
  </>
)

export default Layout
