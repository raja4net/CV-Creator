import React, { Component } from "react";
import Sidebar from "./Sidebar";
import CVHeader from "./CVHeader";
import styled from "styled-components";

class CVPreview extends React.PureComponent {
  render() {
    const { cv } = this.props;
   return(
      <Wrapper>
        <Sidebar
          personalInfo={cv.personalInfo}
          education={cv.education}
          skills={cv.skills}
        />
        <CVHeader personalInfo={cv.personalInfo} experience={cv.experience} />
      </Wrapper>
    )
  };
};

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  width: 1000px;
  height: 800px;;
  border: 2px solid black;
  @media (max-width:800px) {
    width: 600px;
    height: 1000px;
  }
  @media (max-width:500px) {
    width: 380px;
  }

  @media (max-width:400px) {
    width: 340px;
    margin-top:10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default CVPreview;
