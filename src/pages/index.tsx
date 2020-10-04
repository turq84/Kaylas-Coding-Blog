import React from "react"
import { Link, graphql } from "gatsby"
import Intro from "../components/Bio/intro"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import {
  Container,
  LatestStories,
  PostCardContainer,
  Wrapper,
  AllTags,
} from "../components/StyledComponents/styledComponents"
import styled from "styled-components"
import Image from "gatsby-image"
import Post from "../components/Posts/PostCard"

const BlogIndex = ({ data, location }) => {
  const { allMarkdownRemark, site } = data

  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark

  return (
    <Layout>
      <Intro />
      <SEO
        title="Home"
        description="Read and learn about coding with GatsbyJS, AWS, Netlify, and more."
        date="October 4, 2020"
        keywords="Coding tutorials"
        pathName="/"
      />

      <Container>
        <Wrapper>
          <LatestStories>Latest Posts</LatestStories>
          <AllTags to="/tags">All Tags</AllTags>
        </Wrapper>
        <PostCardContainer>
          {posts.nodes.map(({ excerpt, frontmatter, fields }) => {
            const title = frontmatter.title || fields.slug
            return (
              <Post
                excerpt={excerpt}
                fields={fields}
                frontmatter={frontmatter}
                title={title}
              />
            )
          })}
        </PostCardContainer>
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
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
    }
  }
`
