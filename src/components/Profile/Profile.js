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
            Hey! My name is Collin. I am a software engineer with extensive
            experience and a passion for building front-end interfaces!
          </SectionText>
          <SectionText>
            I'm currently based in New Jersey and working for{" "}
            <a target="_blank" href="https://www.mlb.com">
              Major League Baseball
            </a>{" "}
            to create top-of-the-line React web applications for America's
            favorite pastime.
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
