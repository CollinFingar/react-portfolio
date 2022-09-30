import styled, { keyframes } from "styled-components";
import BREAKPOINTS from "../../globals/breakpoints";

const { md } = BREAKPOINTS;

export const DividerWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin: 20px 0px;
`;

const shapesAnimate = keyframes`
    0%{
        transform: translateX(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateX(-100vw) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

export const Shape = styled.div`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${shapesAnimate} 14s linear infinite;
  bottom: -150px;
  right: -200px;

  @media only screen and (max-width: ${md}) {
    animation-duration: 8s;
  }

  ${({ width }) => `width: ${width}; height: ${width};`}
  top: ${({ top }) => top};
  ${({ delay }) => (delay ? `animation-delay: ${delay};` : "")};
  ${({ duration }) => (duration ? `animation-duration: ${duration};` : "")};
`;

export const Shapes = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
