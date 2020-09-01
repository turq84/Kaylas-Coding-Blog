import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Formik, Form, Field, ErrorMessage } from "formik"

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              // body: encode({ "form-name": "contact-demo", ...values }),
            })
              .then(() => {
                alert("Success")
                actions.resetForm()
              })
              .catch(() => {
                alert("Error")
              })
              .finally(() => actions.setSubmitting(false))
          }}
          validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            const errors = {}
            if (!values.name) {
              errors.name = "Name Required"
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid Email Required"
            }
            if (!values.subject) {
              errors.subject = "Subject Required"
            }
            if (!values.message) {
              errors.message = "Message Required"
            }
            return errors
          }}
        >
          <FormContainer
            name="contact"
            action-xhr=""
            method="POST"
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
              component="textarea"
              id="message"
              rows={5}
              placeholder="Message"
            />
            <ErrorContainer>
              <ErrorMessage name="message" />
            </ErrorContainer>
            <ErrorContainer>
              <ErrorMessage name="subject" />
            </ErrorContainer>
            <ErrorContainer>
              <ErrorMessage name="email" />
            </ErrorContainer>
            <ErrorContainer>
              <ErrorMessage name="name" />
            </ErrorContainer>
            <br />
            <Button type="submit">Send Message</Button>
          </FormContainer>
        </Formik>
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

const Input = styled(Field)`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid;
`

const TextArea = styled(Field)`
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
const FormContainer = styled(Form)`
  margin-top: 80px;
`

const ErrorContainer = styled.div`
  color: var(--pink);
  margin: 20px;
  display: inline-block;
`
