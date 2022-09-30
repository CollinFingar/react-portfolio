import styled from "styled-components";
import BREAKPOINTS from "../../globals/breakpoints";
import { SectionWrapper } from "../../globals/styled";
import { SPACING } from "../../globals/styleConfig";

const { sm_spacing, md_spacing } = SPACING;

const { lg } = BREAKPOINTS;

export const FooterWrapper = styled(SectionWrapper)`
  padding: 50px ${md_spacing} ${sm_spacing} 0px;
  text-align: right;
  width: 100%;
  max-width: initial;
  box-sizing: border-box;
  font-size: 12px;
`;
