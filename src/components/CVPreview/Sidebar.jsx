import React from "react";
import emptyAvatar from "../../assets/emptyAvatar.png";
import styled from "styled-components";



const Sidebar = ({ personalInfo, education }) => {
 const educationItems = education.map((item) => {
    <div key={item.id}>{item.institute}</div>
  })

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
  return (
    <>
      <SidebarWrapper>
        <img
          className='profile-pic'
          src={emptyAvatar}
          alt='profile picture'
        ></img>
        <div className='section'>
          <h2 className='section-heading'>Contact</h2>
          <p>Phone </p>
          <h3>{phone}</h3>
          <p>Email </p>
          <h3>{email}</h3>
          <p>Address </p>
          <h3>{city + ", " + country}</h3>
        </div>
        <div className='section'>
          <h2 className='section-heading'>Education</h2>
          {educationItems}
        </div>
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
