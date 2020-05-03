/* eslint jsx-a11y/label-has-for:0 */

import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { Layout, Wrapper, Header, Button } from "../components";

import config from "../../config";

const Content = styled.div`
  border: 5px solid #333;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  position: relative;
  background: white;
  grid-column: 2;
  margin-top: 3rem;

  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
        box-sizing: border-box;
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Content>
        <h1>Reach Out</h1>
        <form
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
        >
          <p>
            <label htmlFor="contact-name">
              Name
              <input name="name" id="contact-name" type="text" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-email">
              E-Mail{" "}
              <input name="email" id="contact-email" type="email" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-message">
              Your Message{" "}
              <textarea name="message" id="contact-message" required />
            </label>
          </p>
          <p>
            <Button>Send</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
