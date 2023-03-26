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
  font-size: 0.9rem;
`;

const PersonalDetails = () => {
  return (
    <>
      <Wrapper>
        <h2> Personal Details</h2>
        <Label for='picture'>Upload Photo:</Label>
        <Input type='file' id='picture' name='picture'></Input>

        <Input
          type='text'
          id='firstname'
          name='firstname'
          placeholder='First Name'
        ></Input>

        <Input
          type='text'
          id='lastname'
          name='lastname'
          placeholder='Last Name'
        ></Input>

        <Input
          type='text'
          id='profession'
          name='profession'
          placeholder='Profession'
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
          id='pincode'
          name='pincode'
          placeholder='Zip / Pin Code'
        ></Input>

        <Input type='text' id='phone' name='phone' placeholder='Phone'></Input>

        <Input type='email' id='email' name='email' placeholder='Email'></Input>

        <Input
          type='text'
          id='twitter'
          name='twitter'
          placeholder='@twitter'
        ></Input>
        <Input
          type='text'
          id='github'
          name='github'
          placeholder='https://github.com/your-github'
        ></Input>
        <Input
          type='text'
          id='linkedin'
          name='linkedin'
          placeholder='https://linkedin.com/your-linkedin'
        ></Input>

        <TextArea
          id='about'
          name='about'
          rows='4'
          cols='50'
          placeholder='About yourself'
        ></TextArea>
      </Wrapper>
    </>
  );
};

export default PersonalDetails;
