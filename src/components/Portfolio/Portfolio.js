import React from "react";
import {
  PortfolioWrapper,
  PortfolioItemWrapper,
  PortfolioImageWrapper,
  PortfolioTextWrapper,
  PortfolioGridWrapper,
} from "./Portfolio.style";
import { ItemSep, ItemTech } from "../History/History.style";
import { SectionHeader } from "../../globals/styled";

import AnimateIn from "../AnimateIn/AnimateIn";

import SpendingInsights from "../../assets/spending-insights.png";
import GamedayLive from "../../assets/mlb-gameday-live.png";
import Schedule from "../../assets/mlb-schedule.png";
import Scores from "../../assets/mlb-scores.png";
import StatsPage from "../../assets/mlb-stats.png";
import WhenToSpray from "../../assets/whentospray.png";

const portfolioConfig = [
  {
    title: "Spending Insights",
    company: "Capital One",
    tech: ["Angular", "D3.js", "SCSS"],
    imgSrc: SpendingInsights,
  },
  {
    title: "Gameday",
    company: "Major League Baseball",
    tech: ["React", "Redux", "styled-components"],
    link: "https://www.mlb.com/gameday/pirates-vs-yankees/2024/09/28/745685/live",
    imgSrc: GamedayLive,
  },
  {
    title: "When To Spray",
    company: "Personal",
    tech: ["React", "D3.js", "styled-components"],
    link: "https://whentospray.com/",
    imgSrc: WhenToSpray,
  },
  {
    title: "Scores",
    company: "Major League Baseball",
    tech: ["React", "Redux", "styled-components"],
    link: "https://www.mlb.com/scores/2024-09-11",
    imgSrc: Scores,
  },
  {
    title: "Schedule",
    company: "Major League Baseball",
    tech: ["React", "Redux", "styled-components"],
    link: "https://www.mlb.com/schedule/2024-09-11",
    imgSrc: Schedule,
  },
  {
    title: "Stats",
    company: "Major League Baseball",
    tech: ["React", "Redux", "SCSS"],
    link: "https://www.mlb.com/stats/",
    imgSrc: StatsPage,
  },
];

const Portfolio = () => {
  return (
    <PortfolioWrapper id="portfolio">
      <AnimateIn>
        <SectionHeader>Portfolio</SectionHeader>
      </AnimateIn>
      <PortfolioGridWrapper>
        {portfolioConfig.map((config) => {
          const { title, tech, imgSrc, company, link = "" } = config;
          const LinkWrapper = !!link ? "a" : "div";
          return (
            <AnimateIn key={title}>
              <LinkWrapper href={link} target="_blank">
                <PortfolioItemWrapper>
                  <PortfolioImageWrapper>
                    <img src={imgSrc} />
                  </PortfolioImageWrapper>
                  <PortfolioTextWrapper>
                    <h2>{title}</h2>
                    <h4>{company}</h4>
                    <div>
                      {tech.map((t, i) => {
                        return (
                          <React.Fragment key={i}>
                            <ItemTech>{t}</ItemTech>
                            {i < tech.length - 1 ? <ItemSep>|</ItemSep> : null}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </PortfolioTextWrapper>
                </PortfolioItemWrapper>
              </LinkWrapper>
            </AnimateIn>
          );
        })}
      </PortfolioGridWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
