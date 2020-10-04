import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import Post from "../components/Posts/PostCard"
import { Container } from "../components/StyledComponents/styledComponents"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const allMarkdownRemark = data.allMarkdownRemark
  const { tag } = pageContext
  const { nodes, totalCount } = allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}".`

  const posts = nodes

  return (
    <Layout>
      <SEO
        title={tag}
        description={`All posts for ${tag}`}
        tags={`tags/${tag}`}
        pathName={`tags/${tag}`}
      />
      <Container>
        <h1 className="centerText">{tag}</h1>
        <p className="centerText">{tagHeader}</p>

        <div className="postContainer">
          {posts.map(({ excerpt, fields, frontmatter }) => {
            const title = frontmatter.title
            return (
              <Post
                key={frontmatter.slug}
                excerpt={excerpt}
                fields={fields}
                frontmatter={frontmatter}
                title={title}
              />
            )
          })}
        </div>
        <Link
          to="/tags"
          className="button tagsButton"
          style={{ width: "max-content" }}
        >
          All Tags
        </Link>
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const TagsTemplateQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        excerpt(pruneLength: 300)
        fields {
          slug
        }
        frontmatter {
          tags
          day: date(formatString: "DD")
          month: date(formatString: "MMM")
          title
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
