import React from "react";
import Input from "../../util/Input";
import Wrapper from "../../util/Wrapper";
import Label from "../../util/Label";
import Button from "../../util/Button";

const Education = ({ education, onChange }) => {
  const educationItems = education.map((item) => {
    <div key={item.id}>{item.institute}</div>;
  });

  return (
    <>
      <Wrapper>
        <h2> Education</h2>

        <Input
          type='text'
          id='institute'
          name='institute'
          placeholder='Institution Name'
          value={education.institute}
          onChange={(e) => onChange(e, id)}
        ></Input>

        <Input
          type='text'
          id='location'
          name='location'
          placeholder='School Location'
          value={education.location}
          onChange={(e) => onChange(e, id)}
        ></Input>

        <Input
          type='text'
          id='degree'
          name='degree'
          placeholder='Degree'
          value={education.degree}
          onChange={(e) => onChange(e, id)}
        ></Input>

        <Input
          type='text'
          id='studyField'
          name='studyField'
          placeholder='Field of Study'
          value={education.studyField}
          onChange={(e) => onChange(e, id)}
        ></Input>

        <Input
          type='text'
          id='startDate'
          name='startDate'
          onfocus="(this.type='date')"
          onblur="if(this.value==''){this.type='text'}"
          placeholder='Start Date'
          value={education.startDate}
          onChange={(e) => onChange(e, id)}
        ></Input>

        <Input
          type='text'
          id='endDate'
          name='endDate'
          onfocus="(this.type='date')"
          onblur="if(this.value==''){this.type='text'}"
          placeholder='End Date'
          value={education.endDate}
          onChange={(e) => onChange(e, id)}
        ></Input>
        <Button type={"primary"}>Add</Button>
        <Button type={"warning"}>Delete</Button>
      </Wrapper>
    </>
  );
};

export default Education;
