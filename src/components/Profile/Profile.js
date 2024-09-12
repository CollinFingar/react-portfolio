import React from "react";
import {
  ProfileWrapper,
  ProfileImgWrapper,
  ProfileInfo,
} from "./Profile.style";
import { SectionHeader, SectionText } from "../../globals/styled";

import Headshot from "../../assets/collin-profile.jpg";

import AnimateIn from "../AnimateIn/AnimateIn";

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImgWrapper>
        <img src={Headshot} />
      </ProfileImgWrapper>
      <ProfileInfo>
        <AnimateIn>
          <SectionHeader>A little about me...</SectionHeader>
        </AnimateIn>
        <AnimateIn>
          <SectionText>
            Hey! My name is Collin. I am a senior software engineer with extensive
            experience and a passion for building web pages and tools!
          </SectionText>
          <SectionText>
            I'm currently based in New Jersey and working for{" "}
            <a target="_blank" href="https://www.capitalone.com/">
              Capital One
            </a>{" "}
            to create top-of-the-line scalable full-stack applications for our credit card holders.
          </SectionText>
          <SectionText>
            As conveyed by my Senior position, I've found my calling and can
            demonstrate my web development prowess through my creative
            problem-solving and history of mentoring others.
          </SectionText>
        </AnimateIn>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
