import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const CVHeader = ({ personalInfo, experience }) => {
  const {
    firstname,
    lastname,
    profession,
    about,
    city,
    country,
    pincode,
    phone,
    email,
    twitter,
    github,
    linkedin,
  } = personalInfo;

  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));

  return (
    <>
      <ContentWrapper>
        <CVHeaderWrapper>
          <div>
            <h1>
              {firstname} {lastname}
            </h1>
            <h3><a href={github} target={"_blank"}>{github} </a></h3>
            <h3><a href={linkedin} target={"_blank"}>{linkedin}</a> </h3> 
            <h3><a href={"https://twitter.com/" + twitter} target={"_blank"}> {twitter}</a></h3>
            <p>{profession}</p>
            <p>{about}</p>
          </div>
        </CVHeaderWrapper>
        <ExperienceWrapper>
          <h2 className='section-heading'>Experience</h2>
          {experienceItems}
        </ExperienceWrapper>
      </ContentWrapper>
    </>
  );
};

const CVHeaderWrapper = styled.div`
  display: flex;
  padding: 2rem;
  background-color: white;
  color: black;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceWrapper = styled.div`
margin-left:2rem;
display: flex:
background-color: white;
color: black;font-size: 1.2rem;

`;

export default CVHeader;
