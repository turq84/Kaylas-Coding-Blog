import React from "react"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import {
  Excerpt,
  Month,
  PostCard,
  PostContent,
  PostDate,
  PostDateAndPreview,
  PostPreview,
  PostTags,
  PostTitle,
  Tags,
  ReadMore,
  ReadMoreLink,
} from "../StyledComponents/styledComponents"

interface Props {
  excerpt: string
  fields: object
  frontmatter: object
  title: string
}

const Post = (props: Props) => {
  const { excerpt, fields, frontmatter, title } = props

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
          {frontmatter.tags.map((tag, index) => (
            <Tags to={`/tags/${kebabCase(tag)}`}>#{tag}</Tags>
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
}

export default Post
