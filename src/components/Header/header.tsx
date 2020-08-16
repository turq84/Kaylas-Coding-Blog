import React from "react"
import styled from "styled-components"
import { links } from "./links"
import {
  HeaderContainer,
  HeaderUl,
  HeaderLi,
  Logo,
  LogoContainer,
  Nav,
  NavLink,
} from "../StyledComponents/styledComponents"
import { Link } from "gatsby"

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo>Kayla Gordon</Logo>
      </LogoContainer>

      <Nav>
        <HeaderUl>
          {links.map((link, index) => (
            <HeaderLi key={index}>
              <NavLink to={`/${link.path}`} title={link.title}>
                {link.title}
              </NavLink>
            </HeaderLi>
          ))}
        </HeaderUl>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
