import styled, { keyframes } from "styled-components";
import BREAKPOINTS from "../../globals/breakpoints";
import { Shapes } from "../Divider/Divider.style";
import { COLORS, SPACING } from "../../globals/styleConfig";

const { highlight, bodyText, darkText } = COLORS;

const { md_spacing } = SPACING;

const { md } = BREAKPOINTS;

const colorChange = keyframes`
    0% {
        color: ${highlight};
    }
    30% {
        color: ${bodyText};
    }
    70% {
        color: ${bodyText};
    }
    100% {
        color: ${highlight};
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const HelloWrapper = styled.div`
  font-size: 16px;
  color: ${highlight};
`;

export const NameWrapper = styled(HelloWrapper)`
  font-size: 72px;
  color: ${highlight};
  animation: ${colorChange} 2s infinite;
  margin-top: ${md_spacing};

  @media only screen and (max-width: ${md}) {
    font-size: 40px;
  }
`;

export const ExplanationWrapper = styled(NameWrapper)`
  font-size: 48px;
  color: ${bodyText};
  animation: init;
  margin-top: ${md_spacing};

  span {
    color: ${darkText};
    margin-right: 10px;
  }

  @media only screen and (max-width: ${md}) {
    font-size: 20px;
    span {
      color: ${darkText};
      margin-right: 5px;
    }
  }
`;

export const LandingAnimWrapper = styled.div`
  animation: ${fadeIn} 0.35s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

export const IntroWrapper = styled.div`
  padding-left: 100px;

  @media only screen and (max-width: ${md}) {
    padding-left: 0px;
    text-align: center;
    margin-top: -32px;
  }
`;

export const LandingWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
`;

export const SquareAreaWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export const LandingShapes = styled(Shapes)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
