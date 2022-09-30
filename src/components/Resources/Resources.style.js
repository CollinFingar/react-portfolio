import styled from "styled-components";
import { SectionWrapper } from "../../globals/styled";
import { SPACING } from "../../globals/styleConfig";

const { sm_spacing } = SPACING;

export const ResourcesWrapper = styled(SectionWrapper)`
  text-align: center;
  img {
    margin: ${sm_spacing};
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
`;
