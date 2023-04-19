import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Button from "../../util/Button"


import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 1rem;
  box-shadow: 0 1px 4px black;
  background-color: #cccccc;
  width: 500px;
  @media (max-width: 500px){
    width: 100%;
    margin:0;
    padding: 0;
  }
`;

const Form = ({
  cv,
  onChangePersonal,
  onChangeEducation,
  onChangeSkills,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  resetCV
}) => {
  return (
    <>
      <FormWrapper>
        <PersonalDetails
          personalInfo={cv.personalInfo}
          onChange={onChangePersonal}
        />  
        <Experience
          experienceArray={cv.experience}
          onChange={onChangeExperience}
          onAdd={onAddExperience}
          onDelete={onDeleteExperience}
        />
        <Skills skills={cv.skills} onChange={onChangeSkills} />
        <Education
          educationArray={cv.education}
          onChange={onChangeEducation}
          onAdd={onAddEducation}
          onDelete={onDeleteEducation}
        />
        </FormWrapper>
        
        <FormWrapper>
          <h2 className="options">Options</h2>
          <Button type={"primary"} onClick={onPrint}>Generate CV in pdf</Button>
          <Button type={"warning"} onClick={resetCV}>Reset CV</Button>
        </FormWrapper>
    </>
  );
};

export default Form;
