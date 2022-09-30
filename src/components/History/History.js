import React from "react";
import {
  HistoryWrapper,
  HistoryItemsWrapper,
  TimelineBar,
  HistoryItem,
  ItemPosition,
  ItemDate,
  ItemCompany,
  // ItemDescription,
  ItemDot,
  ItemTechWrapper,
  ItemTech,
  ItemSep,
} from "./History.style";
import careers from "./config";
import { SectionHeader } from "../../globals/styled";
import AnimateIn from "../AnimateIn/AnimateIn";

const generateCareers = () => {
  const careerArr = careers.map((career) => {
    const { position, start, end, company, description, techs = [] } = career;
    return (
      <AnimateIn>
        <HistoryItem>
          <ItemDot />
          <ItemPosition>{position}</ItemPosition>
          <ItemCompany>{company}</ItemCompany>
          <ItemDate>
            {start} - {end}
          </ItemDate>
          {/* <ItemDescription>{description}</ItemDescription> */}
          {techs.length ? (
            <ItemTechWrapper>
              {techs.map((item) => {
                return (
                  <>
                    <ItemTech>{item}</ItemTech>
                    <ItemSep> | </ItemSep>
                  </>
                );
              })}
            </ItemTechWrapper>
          ) : null}
        </HistoryItem>
      </AnimateIn>
    );
  });
  return careerArr;
};

const History = () => {
  return (
    <HistoryWrapper>
      <SectionHeader>Career History</SectionHeader>
      <HistoryItemsWrapper>
        <TimelineBar />
        {generateCareers()}
      </HistoryItemsWrapper>
    </HistoryWrapper>
  );
};

export default History;
