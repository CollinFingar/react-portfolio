import React from "react";
import { AppWrapper, MainWrapper } from "./App.style";
import Profile from "../Profile/Profile";
import History from "../History/History";
import Skills from "../Skills/Skills";
import Resources from "../Resources/Resources";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Portfolio from "../Portfolio/Portfolio";
import Divider from "../Divider/Divider";
import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../globals/styleConfig";

const { bgColor, titles } = COLORS;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Sora', sans-serif;
    padding: 0;
    margin: 0;
    background: ${bgColor};
    color: ${titles};
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Landing />
      <Profile />
      <Divider />
      <Skills />
      <Divider type={2} />
      <Portfolio />
      <Divider type={3} />
      <History />
      <Divider />
      <Resources />
      <Footer />
    </AppWrapper>
  );
};

export default App;
