import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
// import { Icon } from "../icons"
// import { deviceMax } from "../src/components/StyledComponents/styledComponents"

const AboutIndex = () => {
  const data = useStaticQuery(graphql`
    query contentQuery {
      muzli: file(absolutePath: { regex: "/muzli2.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      codeburst: file(absolutePath: { regex: "/codeburst.png/" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      devto: file(absolutePath: { regex: "/devTo.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(absolutePath: { regex: "/medium.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <p>Hi! I'm Kayla.</p>

      <p>I am originally from the USA and I currently reside in Finland.</p>
      <Table>
        <tr>
          <td>
            <span role="img" aria-label="coder">
              👩🏻‍💻
            </span>
          </td>
          <td>Self taught coder</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="lightbulb">
              💡
            </span>
          </td>
          <td>Always learning</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="books">
              📚
            </span>
          </td>
          <td>Enjoys reading</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="pawn">
              ♟️
            </span>
          </td>
          <td>Chess fan</td>
        </tr>
        <tr>
          <td>
            <span role="img" aria-label="diamond">
              💎
            </span>
          </td>
          <td>Intermediate web designer</td>
        </tr>
      </Table>

      <h2>Published Content</h2>

      <ShowcaseContainer>
        <a
          href="https://medium.muz.li/neumorphic-design-ad5586796b1b"
          target="_blank"
          rel="noreferrer"
        >
          <ShowcaseImage fixed={data.muzli.childImageSharp.fixed} alt="Muzli" />
        </a>
        <a
          href="https://codeburst.io/deploy-your-gatsby-website-to-netlify-a33796427305"
          target="_blank"
          el="noreferrer"
        >
          <ShowcaseImage
            fixed={data.codeburst.childImageSharp.fixed}
            alt="Codeburst.io"
          />
        </a>

        <a href="https://dev.to/turq84" target="_blank" rel="noreferrer">
          <ShowcaseImage
            fixed={data.devto.childImageSharp.fixed}
            alt="Dev.to"
          />
        </a>
        <a
          href="https://medium.com/@kayla.m.gordon"
          target="_blank"
          rel="noreferrer"
        >
          <ShowcaseImage
            fixed={data.medium.childImageSharp.fixed}
            alt="Medium"
          />
        </a>
      </ShowcaseContainer>

      <hr />

      <h2>Development</h2>
      <ShowcaseContainer>
        {/* <Icon
          name="django"
          height="200px"
          width="200px"
          stroke="none"
          fill="#092E20"
          viewBox="0 0 275 90"
        />
        <Icon
          name="gatsby"
          height="200px"
          width="200px"
          stroke="none"
          viewBox="0 0 106 28"
        />
        <Icon
          name="mysql"
          height="200px"
          width="200px"
          stroke="none"
          viewBox="-18.458 6.58 191.151 132.49"
        />
        <Icon
          name="react"
          height="125px"
          width="125px"
          stroke="none"
          viewBox="0 0 23 20.46348"
        />
        <Icon
          name="amplify"
          height="125px"
          width="125px"
          stroke="none"
          viewBox="0 0 126 94"
        />
        <Icon
          name="graphql"
          height="125px"
          width="125px"
          stroke="none"
          viewBox="0 0 400 400"
        /> */}
      </ShowcaseContainer>

      <hr />
      <h2>Projects</h2>
      <p>
        For my design and development work, please see the{" "}
        <Link to="/projects">projects page</Link>.
      </p>
    </>
  )
}

export default AboutIndex

const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;

  @media ${deviceMax.mobileL} {
    flex-direction: column;
    width: 90%;
    margin: auto;
  }
`

const ShowcaseImage = styled(Image)`
  margin-right: 30px;

  @media ${deviceMax.mobileL} {
    margin: 0px auto 30px auto;
  }
`

const Table = styled.table`
  width: 400px;
  margin: auto;

  td {
    border: none;
  }

  @media ${deviceMax.mobileL} {
    width: 100%;
    margin: auto;
  }
`
