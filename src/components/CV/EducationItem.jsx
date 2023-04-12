import React from "react";
import Input from "../../util/Input";
import Button from "../../util/Button";

const EducationItem = ({ educationItem, id, onChange }) => {
  return (
    <>
      <Input
        type='text'
        id='institute'
        name='institute'
        placeholder='Institution Name'
        value={educationItem.institute}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Input
        type='text'
        id='location'
        name='location'
        placeholder='School Location'
        value={educationItem.location}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Input
        type='text'
        id='degree'
        name='degree'
        placeholder='Degree'
        value={educationItem.degree}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Input
        type='text'
        id='studyField'
        name='studyField'
        placeholder='Field of Study'
        value={educationItem.studyField}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Input
        type='text'
        id='startDate'
        name='startDate'
        onfocus="(this.type='date')"
        onblur="if(this.value==''){this.type='text'}"
        placeholder='Start Date'
        value={educationItem.startDate}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Input
        type='text'
        id='endDate'
        name='endDate'
        onfocus="(this.type='date')"
        onblur="if(this.value==''){this.type='text'}"
        placeholder='End Date'
        value={educationItem.endDate}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Button type={"warning"}>Delete</Button>
    </>
  );
};

export default EducationItem;
