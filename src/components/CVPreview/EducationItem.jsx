const EducationItem = ({ educationItem }) => {
  return (
    <>
      <br></br>
      <h3>
        {educationItem.startDate}-{educationItem.endDate}
      </h3>
      <h3>
        {educationItem.degree} ({educationItem.studyField})
      </h3>
      <h3>
        {educationItem.institute}, {educationItem.location}
      </h3>
    </>
  );
};

export default EducationItem;
