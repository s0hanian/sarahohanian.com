import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { Layout, Article, Wrapper, Button, SectionTitle } from "../components";

const Content = styled.div`
  border: 5px solid #333;
  border-radius: 4px;
  padding: 0.5rem 2rem 0.5rem 12rem;
  position: relative;
  background: white;
  grid-column: 2;
  margin-top: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    padding: 0.5rem 2rem;
  }

  span.hilite {
    font-weight: bold;
  }
`;

const Avatar = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    display: none;
  }
  position: absolute;
  bottom: 0;
  left: 0;
`;

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Content>
        <Avatar>
          <img src="/sarah.png" />
        </Avatar>

        <p>
          Hello, I'm <span className="hilite">Sarah Ohanian</span>, a full-stack
          web developer. I've spent the last 8+ years working at{" "}
          <a href="https://www.tripadvisor.com" target="_blank">
            Tripadvisor
          </a>
          , but as travel has been severely impacted by COVID-19, I'm now
          searching for a new position.
        </p>

        <p>
          I'm a seasoned developer with 20 years of experience working on the
          web. I've most enjoyed doing product-driven work in a fast-paced
          environment.
        </p>

        <p>
          I live about 25 miles outside of{" "}
          <span className="hilite">Boston, Massachusetts</span>. My preference
          is a remote position (fully or partially if local), but also open to
          local opportunities.
        </p>

        <p>
          I'm available after May 5, 2020. Please{" "}
          <Link to="/contact">reach out</Link> about any open roles or for a
          copy of my full resum&eacute;.
        </p>
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;
