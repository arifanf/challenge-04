import React from 'react'

import Navigations from './Navigation'
import MainContent from './MainContent'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
      <Navigations />
      <MainContent>
        {props.children}
      </MainContent>
      <Footer />
    </>
  )
}

export default Layout