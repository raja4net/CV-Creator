import Wrapper from "../../util/Wrapper";
import Button from "../../util/Button";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experienceArray, onChange, onAdd, onDelete }) => {
  const experienceItems = experienceArray?.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));
  return (
    <>
      <Wrapper>
        <h2> Experience</h2>
        {experienceItems}
        <Button type={"primary"} onClick={onAdd}>Add</Button>
      </Wrapper>
    </>
  );
};

export default Experience;
