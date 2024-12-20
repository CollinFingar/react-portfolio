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
    <ProfileWrapper id="profile">
      <ProfileImgWrapper>
        <img src={Headshot} />
      </ProfileImgWrapper>
      <ProfileInfo>
        <AnimateIn>
          <SectionHeader>A little about me...</SectionHeader>
        </AnimateIn>
        <AnimateIn>
          <SectionText>
            Hey! My name is Collin. I'm a passionate full-stack software
            engineer with 8+ years of experience building innovative web
            applications.
          </SectionText>
          <SectionText>
            I'm skilled in frontend technologies like React, Angular, and
            Vue.js, as well as backend development with Node.js and AWS.
          </SectionText>
          <SectionText>
            I'm passionate about creating intuitive user experiences and
            leveraging data visualization to uncover insights.
          </SectionText>
        </AnimateIn>
      </ProfileInfo>
    </ProfileWrapper>
  );
};

export default Profile;
