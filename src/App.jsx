import React, { useState } from "react";
import Header from "./components/CV/Header";
import Form from "./components/CV/Form";
import CVPreview from "./components/CVPreview/CVPreview";
import EmptyCV from "./components/CV/EmptyCV";

const App = () => {
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

    const reader = new FileReader();
    reader.onload = () => {
      setCV((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <Header />
      <Form cv={cv} onChangePersonal={handleChangePersonal} />
      <CVPreview cv={cv} />
    </>
  );
};

export default App;
