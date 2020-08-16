import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Context from "../../store/context"
import Image from "gatsby-image"

const Intro = () => {
  const { state } = useContext(Context)

  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/kayla_coffee.jpg/" }) {
        childImageSharp {
          fluid(maxHeight: 210, maxWidth: 210) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="BioWrap">
      <div className="ImageContainer">
        <Image
          className="profilePic"
          fluid={data.avatar.childImageSharp.fluid}
          alt={author.name}
        />
      </div>
      <div className="IntroContainer">
        <h1 className="IntroTitle">
          Hey! I'm <b>Kayla</b>.
        </h1>
        <p className="IntroDetails">
          I'm a software engineer with a passion for coding. A happy caffeine
          addict ☕, I'm originally from the US currently residing in Finland
          with my other half and our boss, AKA the cat.
        </p>

        <ul className="SocialProfileContainer">
          {/* map through social media links */}
          {/* ...... map() {
            <li className="SocialProfileItem">
              {mapped.item}
            </li>
          } */}
        </ul>
      </div>
    </div>
  )
}

export default Intro
