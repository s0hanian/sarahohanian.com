import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import SEO from "./SEO";
import theme from "../../config/theme";
import useBuildTime from "../hooks/useBuildTime";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${(props) => props.theme.colors.bg};
    background: ${(props) => props.theme.colors.primary};
  }
  html {
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-size: ${(props) => props.theme.baseFontSize};
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.grey.default};
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    transition: all ${(props) => props.theme.transitions.normal};
  }
  a:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.grey.dark};
    font-family: ${(props) => props.theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${(props) => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${(props) => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${(props) => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
`;

const Social = styled.div`
  margin: 0.5rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  font-size: 0.6rem;
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <ThemeProvider theme={theme}>
      <>
        {!customSEO && <SEO buildTime={buildTime} />}
        <GlobalStyle />
        {children}
        <Footer>
          <Social>
            <a href="https://linkedin.com/in/sohanian" target="_blank">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACmElEQVRYR2NkYGBg0MnaIPvnN3MXA+N/ewZGBkmQGM3Af4bnDP8ZD37+9qv06dLgJ4zS0WtleLlZLzIwMgjRzFJsBv9nePf56299Ro3UzcsZmP5H0NVymGX/GFcwaqRteoYc7BxszAyBlrIMCuLcDI9ff2NYd+wxw7eff2jjvv8Mzxk10jf9h5nOwcrMsLrSlkFFihdu4YOXXxmC2g4yfP/5lyaOQHGAn7kMQ2eiIYZFNYsuMqw99oj2DohzUmKoDNPGsKhn3TWGubvu0t4BoHjfWOvAwMbCBLfs959/DIEtBxnuvvhCeweAbLDUFGUo8FNnkBfjYXj46gvD5M03GY5ce00Ty0GGoqQBmtmCx2CaOECMn4NBmI+d4e2nnwyvPv7A6y8UByiK8zBMSjfB0JAz4zTDw1dfweIzc8wZpIQ4UdQsO/iAYdXhhwyp7ioMcc5KDII8bHB5kL7ZO+8wrD2KPRehOEBdmo9hQ609hgP8mg4w3H72GSy+s9mJQU6UG0XNtK23GCSFOMEFGC4AKtCqF13AkKaKA958+skgwsdOMAnVL70EDilkQBUHELQZquDp228MbjX7GP79hxe+qLmA3CgAmX/pwQeGlhWXGR68+sqgryDA0BpvwABKjOgAVKbcePIJLkyVEHj/5ReDf/NBhtdIKd5eV5xhRrYZhgNA6QCUHmCAKg5YfeQRQ92SiyiWMTEyMlyY7MXAilSqghSgF+tUcQAoF4BKTHSwr80FnDuQwZQtNxmmbrlF3RAAGQgyGB1gy7LoaqkSAqMOGA2B0RCgWghwc7AwGKtgdpDO3H4H7xuYq4swcLIxo2T5B6++MICa7+iAGLUYHRNiazaqqAN3TAa6azbgnVNQUIIdwcXWPRDdcwCjzNrIint3pgAAAABJRU5ErkJggg==" />{" "}
            </a>
          </Social>
          Copyright &copy;2020 &bull; Last build: {buildTime}
        </Footer>
      </>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
