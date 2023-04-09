import React from "react";
import Input from "../../util/Input";
import TextArea from "../../util/TextArea";
import Button from "../../util/Button";

const ExperienceItem = ({ experienceItem, id, onChange }) => {
  return (
    <>
      <Input
        type='text'
        id='title'
        name='title'
        placeholder='Job Title'
        value={experienceItem.title}
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Input
        type='text'
        id='employer'
        name='employer'
        value={experienceItem.employer}
        onChange={(e) => onChange(e, id)}
        placeholder='Employer'
      ></Input>

      <Input
        type='text'
        id='city'
        name='city'
        value={experienceItem.city}
        onChange={(e) => onChange(e, id)}
        placeholder='City'
      ></Input>

      <Input
        type='text'
        id='country'
        name='country'
        value={experienceItem.country}
        onChange={(e) => onChange(e, id)}
        placeholder='Country'
      ></Input>

      <Input
        type='text'
        id='startDate'
        name='startDate'
        value={experienceItem.startDate}
        onChange={(e) => onChange(e, id)}
        placeholder='Start Date'
      ></Input>

      <Input
        type='text'
        id='endDate'
        name='endDate'
        value={experienceItem.endDate}
        onChange={(e) => onChange(e, id)}
        placeholder='End Date'
      ></Input>
      <TextArea
        id='role'
        name='role'
        value={experienceItem.role}
        onChange={(e) => onChange(e, id)}
        rows='4'
        cols='50'
        placeholder='Job Role & Responsibilities'
      ></TextArea>
      <Button type={"warning"}>Delete</Button>
    </>
  );
};

export default ExperienceItem;
