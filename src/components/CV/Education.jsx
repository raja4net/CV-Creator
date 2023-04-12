import React from "react";
import Input from "../../util/Input";
import Wrapper from "../../util/Wrapper";
import Label from "../../util/Label";
import Button from "../../util/Button";
import EducationItem from "./EducationItem";

const Education = ({ educationArray, onChange, onAdd }) => {
  const educationItems = educationArray?.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
    ></EducationItem>
  ));

  return (
    <Wrapper>
      <h2 className='section-heading'>Education</h2>
      {educationItems}
      <Button type={"primary"} onClick={onAdd}>
        Add
      </Button>
    </Wrapper>
  );
};

export default Education;
