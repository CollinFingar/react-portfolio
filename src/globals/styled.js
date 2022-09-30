import styled from "styled-components";
import BREAKPOINTS from "./breakpoints";
import { COLORS } from "./styleConfig";

const { lg } = BREAKPOINTS;

const { highlight } = COLORS;

export const SectionWrapper = styled.div`
  max-width: ${lg};
  margin: 0 auto;
  padding: 0px 20px;
`;

export const SectionHeader = styled.h2`
  font-size: 24px;
`;

export const SectionText = styled.p`
  font-size: 16px;
  line-height: 24px;

  a {
    color: ${highlight};
    &:hover {
      color: ${highlight};
    }
  }
`;
