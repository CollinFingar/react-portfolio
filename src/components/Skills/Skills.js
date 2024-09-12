import React from "react";
import {
  SkillsWrapper,
  SkillsListWrapper,
  CurrentSkillsListWrapper,
} from "./Skills.style";
import { SectionHeader } from "../../globals/styled";
import AnimateIn from "../AnimateIn/AnimateIn";

const currentSkillsConfig = [
  "Angular",
  "Vue.js",
  "AWS Cert",
  "Node.js",
  "D3.js",
  "TypeScript",
  "SCSS",
  "Agile",
];

const otherSkillsConfig = [
  "React",
  "styled-components",
  "Storybook",
  "Java",
  "Unity Engine",
  "Unreal Engine",
  "Virtual Reality",
];

const Skills = () => {
  const currentTitle = <SectionHeader>Currently Applied Talents</SectionHeader>;
  const previousTitle = <SectionHeader>Previously Honed Skills</SectionHeader>;
  const currentSkills = (
    <CurrentSkillsListWrapper>
      {currentSkillsConfig.map((skill) => (
        <div>{skill}</div>
      ))}
    </CurrentSkillsListWrapper>
  );
  const previousSkills = (
    <SkillsListWrapper>
      {otherSkillsConfig.map((skill) => (
        <div>{skill}</div>
      ))}
    </SkillsListWrapper>
  );

  return (
    <SkillsWrapper>
      <AnimateIn>{currentTitle}</AnimateIn>
      <AnimateIn>{currentSkills}</AnimateIn>
      <AnimateIn>{previousTitle}</AnimateIn>
      <AnimateIn>{previousSkills}</AnimateIn>
    </SkillsWrapper>
  );
};

export default Skills;
