import Sidebar from "./Sidebar";
import CVHeader from "./CVHeader";
import styled from "styled-components";

const CVPreview = ({ cv }) => {
  return (
    <>
      <Wrapper>
        <Sidebar
          personalInfo={cv.personalInfo}
          education={cv.education}
          skills={cv.skills}
        />

        <CVHeader personalInfo={cv.personalInfo} experience={cv.experience} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  width: 90%;
  height: auto;
  border: 1px solid black;
`;

export default CVPreview;
