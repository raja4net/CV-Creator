import CVHeader from "./CVHeader";

const CVPreview = ({ cv }) => {
  return (
    <>
      <CVHeader personalInfo={cv.personalInfo} />
    </>
  );
};

export default CVPreview;
