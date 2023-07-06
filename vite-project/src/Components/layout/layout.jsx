import React from 'react'
import Header from './header/Header'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout