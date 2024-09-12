import React, { useEffect, useRef } from "react";
import {
  LandingWrapper,
  HelloWrapper,
  NameWrapper,
  ExplanationWrapper,
  IntroWrapper,
  LandingAnimWrapper,
  SquareAreaWrapper,
  LandingShapes,
} from "./Landing.style";
import { landingShapes } from "./config";
import { generateShapes } from "../Divider/Divider";

const Landing = () => {
  const shapes = generateShapes(landingShapes);

  return (
    <LandingWrapper>
      <SquareAreaWrapper>
        <LandingShapes>{shapes}</LandingShapes>
      </SquareAreaWrapper>

      <IntroWrapper>
        <LandingAnimWrapper>
          <HelloWrapper>
            <i>Hello!</i>
          </HelloWrapper>
        </LandingAnimWrapper>
        <LandingAnimWrapper delay={0.5}>
          <HelloWrapper>My name is</HelloWrapper>
        </LandingAnimWrapper>
        <LandingAnimWrapper delay={1}>
          <NameWrapper>Collin Fingar.</NameWrapper>
        </LandingAnimWrapper>
        <LandingAnimWrapper delay={2}>
          <ExplanationWrapper>
            <span>I'm a</span>Senior Software Engineer.
          </ExplanationWrapper>
        </LandingAnimWrapper>
      </IntroWrapper>
    </LandingWrapper>
  );
};

export default Landing;
