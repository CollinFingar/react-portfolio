import styled from "styled-components";
import BREAKPOINTS from "../../globals/breakpoints";
import { SectionWrapper } from "../../globals/styled";
import { COLORS, SPACING } from "../../globals/styleConfig";
import { AnimateWrapper } from "../AnimateIn/AnimateIn.style";

const { sm_spacing, md_spacing } = SPACING;
const { titles, highlight, darkText, bodyText } = COLORS;

const { md } = BREAKPOINTS;

export const TimelineBar = styled.div`
  height: calc(100% - 10px);
  margin: 5px 0px;
  position: absolute;
  width: 2px;
  background-color: ${darkText};
  left: 5px;
`;

export const ItemDot = styled.div`
  position: absolute;
  background-color: ${titles};
  height: 12px;
  width: 12px;
  border-radius: 50%;
  left: 0px;
  top: 5px;
`;

export const ItemPosition = styled.div`
  font-size: 20px;
  margin-bottom: 2px;
`;
export const ItemCompany = styled.div`
  font-size: 16px;
  color: ${highlight};
  margin-bottom: 4px;
`;
export const ItemDate = styled.div`
  font-size: 12px;
  color: ${darkText};
`;
export const ItemDescription = styled.div`
  margin-top: ${md_spacing};
  color: #ccc;
`;

export const ItemSep = styled.span`
  color: ${darkText};

  &:last-child {
    display: none;
  }
  padding: 0px 5px;

  @media only screen and (max-width: ${md}) {
    display: none;
  }
`;

export const ItemTech = styled.span`
  color: ${bodyText};
  font-size: 14px;

  @media only screen and (max-width: ${md}) {
    display: block;
    width: 50%;
    margin-top: ${sm_spacing};
  }
`;

export const ItemTechWrapper = styled.div`
  margin-top: ${sm_spacing};

  @media only screen and (max-width: ${md}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const HistoryItem = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  padding-left: 100px;
`;

export const HistoryItemsWrapper = styled.div`
  position: relative;
  padding-top: ${md_spacing};
`;

export const HistoryWrapper = styled(SectionWrapper)`
  padding: 0 120px;
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (max-width: ${md}) {
    padding: 0 20px;
  }

  ${AnimateWrapper} {
    margin-bottom: 64px;
  }
`;
