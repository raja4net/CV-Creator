const EducationItem = ({ educationItem }) => {
  return (
    <>
      <h3></h3>
      <h3>
        {educationItem.startDate}-{educationItem.endDate}
      </h3>
      <h3>
        {educationItem.degree} 
        </h3>
        <span>
        ({educationItem.studyField})
      </span>
      <h3>
        {educationItem.institute}, {educationItem.location}
      </h3>
    </>
  );
};

export default EducationItem;
