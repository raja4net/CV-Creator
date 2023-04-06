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
      </CVHeaderWrapper>
    </>
  );
};

const CVHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: rgb(90, 90, 90);
  color: white;
  width: 800px;
`;

export default CVHeader;
