import Input from "../../util/Input";
import Wrapper from "../../util/Wrapper";
import Label from "../../util/Label";
import Button from "../../util/Button";
import TextArea from "../../util/TextArea";

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
        <Button type={"primary"}>Add</Button>
        <Button type={"warning"}>Delete</Button>
      </Wrapper>
    </>
  );
};

export default Experience;
