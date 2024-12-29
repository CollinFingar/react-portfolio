import styled from "styled-components";
import { SectionWrapper } from "../../globals/styled";
import BREAKPOINTS from "../../globals/breakpoints";
import { COLORS, SPACING } from "../../globals/styleConfig";
import { ItemTech } from "../History/History.style";

const { md, lg } = BREAKPOINTS;

export const PortfolioImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;
export const PortfolioTextWrapper = styled.div`
  h2 {
    margin-bottom: ${SPACING.sm_spacing};
  }

  h4 {
    margin: ${SPACING.sm_spacing} 0px;
  }

  @media only screen and (max-width: ${lg}) {
    h2 {
      font-size: 16px;
    }

    ${ItemTech} {
      width: 100%;
    }
  }

  text-align: center;
`;
export const PortfolioItemWrapper = styled.div`
  padding: ${SPACING.lg_spacing};
  @media only screen and (max-width: ${md}) {
    padding: ${SPACING.md_spacing};
  }
`;

export const PortfolioWrapper = styled(SectionWrapper)``;

export const PortfolioGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  a {
    color: white;
    text-decoration: none;

    ${PortfolioItemWrapper} {
      transition-duration: 0.2s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media only screen and (max-width: ${lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;
