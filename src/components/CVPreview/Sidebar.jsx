import React from "react";
import EducationItem from "./EducationItem";
import styled from "styled-components";

const Sidebar = ({ personalInfo, education, skills }) => {
  const {
    photo,
    firstname,
    lastname,
    profession,
    city,
    country,
    pincode,
    phone,
    email,
    twitter,
    github,
    linkedin,
  } = personalInfo;

  const educationItems = education.map((educationItem) => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));

  const skillArray = String(skills.skills).trim().split("\n");

  return (
    <>
      <SidebarWrapper>
        <img className='profile-pic' src={photo} alt='profile picture'></img>
        <h2 className='section-heading'>Contact</h2>
        <p>Phone </p>
        <h3>{phone}</h3>
        <p>Email </p>
        <h3>{email}</h3>
        <p>Address </p>
        <h3>{city + ", " + country}</h3>
        <h2 className='section-heading'>Education</h2>
        {educationItems}
        <h2 className='section-heading'>Skills</h2>

        <ul>
          {skillArray &&
            skillArray.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </SidebarWrapper>
    </>
  );
};

const SidebarWrapper = styled.div`
  width: 300px;
  background-color: #323b4c;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  line-height: 1;
`;

export default Sidebar;
