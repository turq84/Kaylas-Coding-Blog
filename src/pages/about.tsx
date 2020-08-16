import React, { useContext } from "react"
import { Container } from "../components/StyledComponents/styledComponents"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Context from "../store/context"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"

const About = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>Coming soon!</h1>
      </Container>
    </Layout>
  )
}

export default About
