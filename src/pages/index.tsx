import React from "react"
import { Link, graphql } from "gatsby"
import Intro from "../components/Bio/intro"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import {
  Container,
  Excerpt,
  imgPost,
  H2,
  LatestStories,
  Month,
  P,
  PostCard,
  PostCardContainer,
  PostContent,
  PostDate,
  PostDateAndPreview,
  PostPreview,
  PostTags,
  PostTitle,
  Tags,
  ReadMore,
  ReadMoreLink,
} from "../components/StyledComponents/styledComponents"
import styled from "styled-components"
import Image from "gatsby-image"

const BlogIndex = ({ data, location }) => {
  const { allMarkdownRemark, site } = data

  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <Intro />
      {/* SEO */}

      <Container>
        <LatestStories>Latest Posts</LatestStories>
        <PostCardContainer>
          {posts.nodes.map(({ excerpt, frontmatter, fields }) => {
            const title = frontmatter.title || fields.slug
            return (
              <PostCard to={fields.slug}>
                <PostDateAndPreview>
                  <PostDate>
                    {frontmatter.day}
                    <Month>{frontmatter.month}</Month>
                  </PostDate>
                  <PostPreview>
                    <Link to={fields.slug}>{/* <imgPost></imgPost> */}</Link>
                  </PostPreview>
                </PostDateAndPreview>
                <PostContent>
                  <PostTags>
                    {frontmatter.tags.map((link, index) => (
                      <Tags to={link}>#{link}</Tags>
                    ))}
                  </PostTags>
                  <PostTitle>{title}</PostTitle>
                  <Excerpt>{excerpt}</Excerpt>
                  <ReadMore>
                    <ReadMoreLink to={fields.slug}>Read More</ReadMoreLink>
                  </ReadMore>
                </PostContent>
              </PostCard>
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
