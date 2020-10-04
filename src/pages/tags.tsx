import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import { Container } from "../components/StyledComponents/styledComponents"

const Tags = ({ data }) => {
  const group = data.allMarkdownRemark.group

  return (
    <Layout>
      <SEO title="Tags" pathName="/tags" />
      <Container>
        <h1 className="centerText">Tags</h1>
        <p className="centerText">
          Find blog posts based on the subjects that interest you.
        </p>
        <div className="tagsContainer">
          {group.map(({ tag }) => {
            return (
              <Link key={tag} className="tags" to={`/tags/${kebabCase(tag)}`}>
                #{tag}
              </Link>
            )
          })}
        </div>

        <Link
          className="button tagsButton"
          style={{ width: "max-content" }}
          to="/"
        >
          Return
        </Link>
      </Container>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query tagsPageQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
