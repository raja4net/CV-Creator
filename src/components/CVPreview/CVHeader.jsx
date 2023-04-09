import React from "react";
import styled from "styled-components";
import ExperienceItem from "./ExperienceItem";

const CVHeader = ({ personalInfo, experience }) => {
  console.log(experience);
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
  background-color: rgb(90, 90, 90);
  color: white;
  width: 800px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceWrapper = styled.div`
margin-left:1rem;
display: flex:
background-color: white;
color: black;font-size: 1.2rem;

`;

export default CVHeader;
