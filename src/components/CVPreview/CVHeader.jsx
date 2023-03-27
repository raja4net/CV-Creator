import React from "react";
import styled from "styled-components";

const CVHeader = ({ personalInfo }) => {
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
      <CVHeaderWrapper>
        <div>
          <h1>
            {firstname} {lastname}
          </h1>
          <p>{profession}</p>
        </div>
        <div>
          <h3>{phone}</h3>
          <h3>{email}</h3>
          <h3>
            {city} {pincode} {country}
          </h3>
          <h3>{github}</h3>
          <h3>{linkedin}</h3>
          <h3>{twitter}</h3>
        </div>
      </CVHeaderWrapper>
    </>
  );
};

const CVHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  background-color: rgb(90, 90, 90);
  color: white;
`;

export default CVHeader;
