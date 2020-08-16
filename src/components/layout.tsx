import React from "react"
import "../../static/style.css"
import ThemeToggler from "./themeToggler"
import GlobalStyles from "./globalStyles"
import Header from "./Header/header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {/* <ThemeToggler /> */}
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
