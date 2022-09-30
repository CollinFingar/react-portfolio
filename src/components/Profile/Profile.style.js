import styled from "styled-components";
import { SectionWrapper } from "../../globals/styled";
import BREAKPOINTS from "../../globals/breakpoints";
import { COLORS, SPACING } from "../../globals/styleConfig";

const { darkText, bodyText, titles } = COLORS;

const { md_spacing } = SPACING;

const { sm, md } = BREAKPOINTS;

export const ProfileImgWrapper = styled.div`
  img {
    margin-top: 10px;
    width: 300px;
    height: 300px;
    box-shadow: 12px 12px 0px -1px ${darkText};
  }
  text-align: center;
`;

export const ProfileWrapper = styled(SectionWrapper)`
  padding-top: 40px;
  display: flex;
  flex-direciton: row;

  @media only screen and (max-width: ${md}) {
    flex-direction: column;
    img {
      margin-bottom: 50px;
    }
  }
`;

export const ProfileInfo = styled.div`
  h2 {
    margin-top: ${md_spacing};
    color: ${titles};
  }
  color: ${bodyText};

  margin-left: 72px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${md}) {
    margin: 0px;
  }
`;
