import styled from "styled-components";

const ExperienceItem = ({ experienceItem }) => {
  console.log(experienceItem);
  return (
    <>
      <Wrapper>
        <div className='circle'>o</div>
        <div className='experience'>
          <h3>
            {experienceItem.startDate}-{experienceItem.endDate}
          </h3>
          <h3>{experienceItem.employer}</h3>
          <h2>{experienceItem.title}</h2>
          <p>{experienceItem.role}</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default ExperienceItem;
