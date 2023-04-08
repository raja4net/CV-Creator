import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.9rem;
`;

const TextArea = styled.textarea`
  width: 25rem;
  font: 2rem;
  overflow: hidden;
  border-radius: 3px;
  border: none;
  margin: 10px;
  resize: none;
  font-style: inherit;
`;

const Skills = () => {
  return (
    <>
      <Wrapper>
        <h2> Skills</h2>
        <TextArea
          id='skills'
          name='skills'
          placeholder='Enter skills in different lines to add bullets'
          rows='4'
          cols='50'
        ></TextArea>
      </Wrapper>
    </>
  );
};

export default Skills;
