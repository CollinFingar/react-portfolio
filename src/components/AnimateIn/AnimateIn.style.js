import styled, { keyframes, css } from "styled-components";

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

export const AnimateWrapper = styled.div`
  ${({ animate }) =>
    animate
      ? css`
          animation: ${fadeIn} 0.35s ease-out;
        `
      : ""};
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay}s;
`;
