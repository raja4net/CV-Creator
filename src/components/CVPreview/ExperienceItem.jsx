const ExperienceItem = ({ experienceItem }) => {
  console.log(experienceItem);
  return (
    <>
      <h3>
        {experienceItem.startDate}-{experienceItem.endDate}
      </h3>
      <h3>{experienceItem.employer}</h3>
      <h2>{experienceItem.title}</h2>
      <p>{experienceItem.role}</p>
    </>
  );
};

export default ExperienceItem;
