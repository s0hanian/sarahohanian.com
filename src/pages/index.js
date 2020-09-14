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
  min-height: 200px;

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
          engineer. I've got a job I like working on cool things with awesome
          people, so not looking anymore!
        </p>

        <p>
          Not much else to say right now, but I'll have a few projects to share
          soon as I get some free time.
        </p>

        <p>
          <Link to="/contact">contact me</Link>
        </p>
      </Content>
    </Wrapper>
  </Layout>
);

export default IndexPage;
