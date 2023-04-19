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
        <h3>
        ({educationItem.studyField})
      </h3>
      <h3>
        {educationItem.institute}, {educationItem.location}
      </h3>
      <div className="divider"> </div>
    </>
  );
};

export default EducationItem;
