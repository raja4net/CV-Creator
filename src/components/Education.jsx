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

const Education = () => {
  return (
    <>
      <Wrapper>
        <h2> Education</h2>

        <Input
          type='text'
          id='institute'
          name='institute'
          placeholder='Institution Name'
        ></Input>

        <Input
          type='text'
          id='location'
          name='location'
          placeholder='School Location'
        ></Input>

        <Input
          type='text'
          id='degree'
          name='degree'
          placeholder='Degree'
        ></Input>

        <Input
          type='text'
          id='studyField'
          name='studyField'
          placeholder='Field of Study'
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
        <Button>Add</Button>
        <DeleteButton>Delete</DeleteButton>
      </Wrapper>
    </>
  );
};

export default Education;
