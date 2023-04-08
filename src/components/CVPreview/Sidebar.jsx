import React from "react";
import emptyAvatar from "../../assets/emptyAvatar.png";
import styled from "styled-components";
import EducationItem from "./EducationItem";

const Sidebar = ({ personalInfo, education }) => {
  const {
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

  return (
    <>
      <SidebarWrapper>
        <img
          className='profile-pic'
          src={emptyAvatar}
          alt='profile picture'
        ></img>

        <h2 className='section-heading'>Contact</h2>
        <p>Phone </p>
        <h3>{phone}</h3>
        <p>Email </p>
        <h3>{email}</h3>
        <p>Address </p>
        <h3>{city + ", " + country}</h3>

        <h2 className='section-heading'>Education</h2>
        {educationItems}
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
`;

export default Sidebar;
