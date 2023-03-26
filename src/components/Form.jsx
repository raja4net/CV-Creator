import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 2rem;
  box-shadow: 0 1px 4px black;
  background-color: #cccccc;
  width: 40vw;
`;

const Form = () => {
  return (
    <>
      <FormWrapper>
        <PersonalDetails />
        <Experience />
      </FormWrapper>
    </>
  );
};

export default Form;
