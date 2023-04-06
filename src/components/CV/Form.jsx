import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 2rem;
  box-shadow: 0 1px 4px black;
  background-color: #cccccc;
  width: 40vw;
`;

const Form = ({ cv, onChangePersonal, onChangeEducation }) => {
  return (
    <>
      <FormWrapper>
        <PersonalDetails
          personalInfo={cv.personalInfo}
          onChange={onChangePersonal}
        />
        <Experience />
        <Skills />
        <Education education={cv.education} onChange={onChangeEducation} />
      </FormWrapper>
    </>
  );
};

export default Form;