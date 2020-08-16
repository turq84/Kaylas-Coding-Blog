import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Context from "../../store/context"

const ServiceContent = () => {
  const { state } = useContext(Context)

  const Span = styled.span`
    color: ${state?.isDark ? `var(--linkDark)` : `var(--link)`};
  `

  const Button = styled(Link)`
    padding: 15px 30px;
    width: max-content;
    border-radius: 5px;
    color: ${state?.isDark ? `var(--bgDark)` : `var(--bg)`};
    background-color: ${state?.isDark ? `var(--linkDark)` : `var(--link)`};
    border: none;
    /* background-image: #ffffff repeating-linear-gradient( 135deg, #ff5a54, #ff5a54 20px, transparent 20px, transparent 40px, #3fa9f5 40px, #3fa9f5 60px, transparent 60px, transparent 80px ) */

    &:hover {
      cursor: pointer;
    }
  `

  return (
    <>
      <ul>
        <li>Web design</li>
        <li>Web development</li>
        <li>SEO (Search Engine Optimization)</li>
        <li>User login</li>
        <li>Google Analytics</li>
        <li>Google Search Console</li>
        <li>AWS Amplify</li>
        <li>Maintaining the website monthly... and much more!</li>
      </ul>
      <h2>Pricing</h2>
      <p>50€ / hour, starting out.</p>
      <p>
        <b>Prices may increase, depending on the project.</b>
      </p>

      <h2>Next steps</h2>
      <p>
        If you have a project in mind and want to work together to bring your
        project to life, or you have questions in general, feel free to send me
        an email. <Span>I'm here to help.</Span>
      </p>

      <Button to="/contact">Contact Me</Button>
    </>
  )
}

export default ServiceContent
