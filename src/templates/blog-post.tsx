import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Bio from "../components/Bio/bio"
import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import styled from "styled-components"
import {
  Container,
  deviceMax,
  deviceMin,
  PostTags,
  Tags,
} from "../components/StyledComponents/styledComponents"
import Context from "../store/context"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { state } = useContext(Context)

  // const HeroWrap = styled.div`
  //   background: linear-gradient(
  //     90deg,
  //     rgba(0, 0, 0, 0) 0%,
  //     rgba(0, 0, 0, 0) 30%,
  //     rgba(233, 162, 188, 0.1) 30%,
  //     rgba(233, 162, 188, 0.1) 30%
  //   );
  //   position: relative;
  //   padding: 0 20px;
  //   margin-bottom: 30px;
  //   overflow-x: hidden;

  //   @media ${deviceMin.mobileL} {
  //     padding: 0;
  //     margin-bottom: 0;
  //   }

  //   @media ${deviceMax.mobileL} {
  //     background: var(--bgDabgrk);
  //     background: ${state?.isDark ? `var(--bgDabgrk)` : `var(--bg)`};
  //   }
  // `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        keywords={post.frontmatter.keywords}
        pathName={post.frontmatter.slug}
      />
      <BlogPostDetailsWrapper>
        <PostDetailsWrapper>
          <PostPreview>
            <Image
              fluid={post.frontmatter.thumbnailBlog.childImageSharp.fluid}
              alt={post.frontmatter.title}
            />
          </PostPreview>
          <PostDescriptionWrapper>
            <H1>{post.frontmatter.title}</H1>
            <Date>{post.frontmatter.date}</Date>
            <PostDetails>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />

              <Footer>
                <PostTags>
                  {post.frontmatter.tags?.map((link, index) => (
                    <Tags to={link}>#{link}</Tags>
                  ))}
                </PostTags>
              </Footer>
            </PostDetails>
          </PostDescriptionWrapper>
        </PostDetailsWrapper>
      </BlogPostDetailsWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 175)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        keywords
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
`

const BlogPostDetailsWrapper = styled.div`
  margin: 0px auto;
  padding: 90px 75px 120px;

  @media (max-width: 1199px) {
    padding: 80px 35px;
  }
`
const PostDetailsWrapper = styled.div`
  position: relative;

  @media (min-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
  }
`
const PostPreview = styled.div`
  margin-top: 45px;
  position: relative;

  @media (min-width: 991px) {
    max-width: 42%;
    padding-right: 60px;
    flex: 0 0 42%;
    margin: 0px;
  }

  @media (max-width: 1200px) {
    margin-top: 40px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: rgb(117, 117, 117);
    bottom: 0px;
    left: 10%;
    filter: blur(15px);

    @media (min-width: 991px) {
      width: calc(80% - 60px);
    }
  }
`
const PostDescriptionWrapper = styled.div`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  width: 870px;
  max-width: 100%;

  @media (min-width: 991px) {
    max-width: 58%;
    flex: 0 0 58%;
    margin: 0px;
  }

  @media (max-width: 1200px) {
    margin-top: 70px;
  }
`
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: rgb(41, 41, 41);
  line-height: 1.53;
  margin-bottom: 10px;
  margin-top: 0px;
`
const Date = styled.span`
  display: block;
  font-size: 15px;
  color: rgb(41, 41, 41);
  font-weight: 400;
  text-transform: uppercase;
`
const PostDetails = styled.div`
  margin-top: 60px;
  font-size: 16px;
`

const Footer = styled.div`
  margin-top: 100px;
`
