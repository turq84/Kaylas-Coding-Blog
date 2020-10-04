import React, { useContext } from "react"
import { Container } from "../components/StyledComponents/styledComponents"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Context from "../store/context"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  const { state } = useContext(Context)

  const Project = styled.div`
    padding: 20px;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 10px;
  `

  const Hr = styled.hr``

  return (
    <Layout>
      <SEO title="Projects" />

      <Container>
        <h1 className="projects">Projects</h1>

        <ProjectWrap>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title

            return (
              <>
                <Project>
                  <Image
                    alt="Blog post cover "
                    fluid={
                      node.frontmatter.thumbnailBlog?.childImageSharp?.fluid
                    }
                  />
                  <Title className="projects">{title}</Title>
                  <section
                    className="projects"
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                  <Hr />

                  <Links>
                    <ul className="projects">
                      <Li>
                        <a href={node.frontmatter.url}>Website</a>
                      </Li>
                      {node.frontmatter.repo ? (
                        <Li>
                          <a href={node.frontmatter.repo}>Source Code</a>
                        </Li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </Links>
                </Project>
              </>
            )
          })}
        </ProjectWrap>
      </Container>
    </Layout>
  )
}

export default Projects
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            url
            repo
            thumbnailBlog {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const HeaderLink = styled(Link)`
  box-shadow: none;
  color: inherit;
  font-family: Montserrat, sans-serif;

  &:hover {
    box-shadow: none;
  }
`

const ProjectWrap = styled.div`
  display: block;
  margin-top: 50px;
`

const Image = styled(Img)`
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 20px;
`

const Title = styled.h2`
  margin-top: 50px;
`

const Links = styled.div``

const Li = styled.li`
  display: inline-block;
  text-decoration: none;
  margin-right: 20px;

  .hire {
    border: 2px solid;
    border-radius: 5px;
    padding: 5px 10px;
  }
`
