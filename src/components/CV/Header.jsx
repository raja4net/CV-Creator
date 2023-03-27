import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 2rem;
  background-color: rgb(90, 90, 90);
  color: white;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className='header'>
          <h1>CV Creator</h1>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
