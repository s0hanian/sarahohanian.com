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
          engineer. I recently lost my job at{" "}
          <a href="https://tripadvisor.com" target="_blank">
            Tripadvisor
          </a>{" "}
          due to COVID-19 impacting travel, but I'm excited to share I'll be
          starting a new position in a few weeks at{" "}
          <a href="https://www.iracing.com/" target="_blank">
            iRacing
          </a>
          .
        </p>

        <p>
          While I've been unemployed, I've been working on a project I hope to
          launch in the next week or two. It's called{" "}
          <a href="https://estimatey.app/" target="_blank">
            Estimatey
          </a>
          . More details soon!
        </p>

        <p>
          <Link to="/contact">contact me</Link>
        </p>
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;
