import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import {
  Four0FourH1,
  Four0FourImage,
  NotFoundContainer,
  NotFoundContent,
  NotFoundImage,
  ReadMoreLink,
} from "../components/StyledComponents/styledComponents"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <NotFoundContainer>
        <NotFoundContent>
          <Four0FourH1>This Page Was Not Found</Four0FourH1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

          <ReadMoreLink to="/">Go Back</ReadMoreLink>
        </NotFoundContent>
        <NotFoundImage>
          <Four0FourImage fluid={data.file.childImageSharp.fluid} alt="404" />
        </NotFoundImage>
      </NotFoundContainer>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(absolutePath: { regex: "/404.png/" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
