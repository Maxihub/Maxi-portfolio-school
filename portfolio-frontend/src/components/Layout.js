import React from 'react'
// import "../css/main.css"
/*
We will not use the above import css, instead we will
use the import in the gatsby-browser.js, this way we
not need any local css imports in each js file
*/
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
//This component is the main layout where we import all other components

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
