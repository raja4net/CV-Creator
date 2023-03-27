import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.9rem;
`;

const Input = styled.input`
  width: 25rem;
  font: 2rem;
  overflow: hidden;
  border-radius: 3px;
  border: none;
  line-height: 2;
  margin: 10px;
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

const Label = styled.label`
  font-weight: 400;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 25.3rem;
  margin: 8px 0 8px 7px;
  font-size: 1rem;
  text-align: center;
  outline:: none;
`;

const DeleteButton = styled(Button)`
  background-color: #a2100c;
  color: white;
`;

const Experience = () => {
  return (
    <>
      <Wrapper>
        <h2> Experience</h2>

        <Input
          type='text'
          id='title'
          name='title'
          placeholder='Job Title'
        ></Input>

        <Input
          type='text'
          id='employer'
          name='employer'
          placeholder='Employer'
        ></Input>

        <Input type='text' id='city' name='city' placeholder='City'></Input>

        <Input
          type='text'
          id='country'
          name='country'
          placeholder='Country'
        ></Input>

        <Input
          type='text'
          id='startDate'
          name='startDate'
          onfocus="(this.type='date')"
          onblur="if(this.value==''){this.type='text'}"
          placeholder='Start Date'
        ></Input>

        <Input
          type='text'
          id='endDate'
          name='endDate'
          onfocus="(this.type='date')"
          onblur="if(this.value==''){this.type='text'}"
          placeholder='End Date'
        ></Input>
        <TextArea
          id='role'
          name='role'
          rows='4'
          cols='50'
          placeholder='Job Role & Responsibilities'
        ></TextArea>
        <Button>Add</Button>
        <DeleteButton>Delete</DeleteButton>
      </Wrapper>
    </>
  );
};

export default Experience;
