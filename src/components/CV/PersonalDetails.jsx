import React, { useRef } from "react";
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

const PersonalDetails = ({ personalInfo, onChange }) => {
  return (
    <>
      <Wrapper>
        <h2> Personal Details</h2>
        <Label forHTML='photo'>
          Upload Photo:
          <Input type='file' name='photo' onChange={(e) => onChange(e)}></Input>
        </Label>
        <Input
          type='text'
          id='firstname'
          name='firstname'
          placeholder='First Name'
          value={personalInfo.firstname}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='lastname'
          name='lastname'
          placeholder='Last Name'
          value={personalInfo.lastname}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='profession'
          name='profession'
          placeholder='Profession'
          value={personalInfo.profession}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='city'
          name='city'
          placeholder='City'
          value={personalInfo.city}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='country'
          name='country'
          placeholder='Country'
          value={personalInfo.country}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='pincode'
          name='pincode'
          placeholder='Zip / Pin Code'
          value={personalInfo.pincode}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='phone'
          name='phone'
          placeholder='Phone'
          value={personalInfo.phone}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          value={personalInfo.email}
          onChange={(e) => onChange(e)}
        ></Input>

        <Input
          type='text'
          id='twitter'
          name='twitter'
          placeholder='@twitter'
          value={personalInfo.twitter}
          onChange={(e) => onChange(e)}
        ></Input>
        <Input
          type='text'
          id='github'
          name='github'
          placeholder='https://github.com/your-github'
          value={personalInfo.github}
          onChange={(e) => onChange(e)}
        ></Input>
        <Input
          type='text'
          id='linkedin'
          name='linkedin'
          placeholder='https://linkedin.com/your-linkedin'
          value={personalInfo.linkedin}
          onChange={(e) => onChange(e)}
        ></Input>

        <TextArea
          id='about'
          name='about'
          rows='4'
          cols='50'
          placeholder='About yourself'
          value={personalInfo.about}
          onChange={(e) => onChange(e)}
        ></TextArea>
      </Wrapper>
    </>
  );
};

export default PersonalDetails;
