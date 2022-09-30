import styled from "styled-components";
import BREAKPOINTS from "../../globals/breakpoints";
import { SectionWrapper } from "../../globals/styled";
import { COLORS, SPACING } from "../../globals/styleConfig";

const { bodyText, highlight } = COLORS;
const { sm_spacing, md_spacing } = SPACING;

const { md } = BREAKPOINTS;

export const SkillsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: ${bodyText};
  font-size: 20px;

  @media only screen and (max-width: ${md}) {
    grid-template-columns: 1fr 1fr;
    font-size: 16px;
    margin-bottom: ${md_spacing};
  }

  > div {
    margin-bottom: ${sm_spacing};
  }
`;

export const CurrentSkillsListWrapper = styled(SkillsListWrapper)`
  color: ${highlight};
`;

export const SkillsWrapper = styled(SectionWrapper)``;
