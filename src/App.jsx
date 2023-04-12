import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/CV/Header";
import Form from "./components/CV/Form";
import CVPreview from "./components/CVPreview/CVPreview";
import EmptyCV from "./components/CV/EmptyCV";

const App = () => {
  // console.clear();
  const [cv, setCV] = useState(EmptyCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      handleChangeFile(e);
      return;
    }

    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const imgUrl = URL.createObjectURL(file);
    setCV((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: imgUrl,
      },
    }));
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleChangeSkills = (e) => {
    const { name, value } = e.target;

    setCV((prevState) => ({
      ...prevState,
      skills: {
        ...prevState.skills,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const newExperience = prevState.experience.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleAddEducation = () => {
    console.log("clicked");
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  return (
    <>
      <Header />
      <Form
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeEducation={handleChangeEducation}
        onChangeSkills={handleChangeSkills}
        onChangeExperience={handleChangeExperience}
        onAddEducation={handleAddEducation}
      />
      <CVPreview cv={cv} />
    </>
  );
};

export default App;
