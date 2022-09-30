import React from "react";
import { ResourcesWrapper } from "./Resources.style";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import { SectionHeader } from "../../globals/styled";
import AnimateIn from "../../components/AnimateIn/AnimateIn";

const Resources = () => {
  return (
    <ResourcesWrapper>
      <AnimateIn scrollTopAddition={50}>
        <SectionHeader>Resources</SectionHeader>
      </AnimateIn>

      <AnimateIn scrollTopAddition={50}>
        <a href="https://linkedin.com/in/collinfingar" target="_blank">
          <img src={LinkedinIcon} />
        </a>
        <a href="https://github.com/CollinFingar" target="_blank">
          <img src={GithubIcon} />
        </a>
      </AnimateIn>
    </ResourcesWrapper>
  );
};

export default Resources;
