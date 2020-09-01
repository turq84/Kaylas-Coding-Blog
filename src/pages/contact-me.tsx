import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <Container>
        <h1>Contact</h1>
        <Form
          name="contact"
          action-xhr=""
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Input type="text" name="name" id="name" placeholder="Name" />

          <Input type="email" name="email" id="email" placeholder="Email" />

          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />

          <TextArea
            name="message"
            id="message"
            rows={5}
            placeholder="Message"
          />

          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </Layout>
  )
}

export default Contact

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1rem;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid;
  margin-top: 100px;
`
const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  background-color: rgb(41, 41, 41);
  height: 44px;
  width: auto;
  font-family: "Fira Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 27px;
  padding-right: 27px;
  text-decoration: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  transition: all 0.3s ease 0s;
`
const Form = styled.form`
  margin-top: 80px;
`
