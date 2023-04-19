import styled from "styled-components";

const Button = ({ type, children, onClick }) => {
  return (
    <ButtonComponent onClick={onClick} type={type}>
      {children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  width: 25.3rem;
  margin: 8px 0 8px 7px;
  font-size: 1rem;
  color: white;
  font: white;
  text-align: center;
  outline:: none;
  background-color: ${({ type }) => backgroundColors[type]};
  :hover {
    background-color: ${({ type }) => hoverBgColors[type]};
  }
  @media (max-width :500px) {
    width: 150px;
  }
  @media (max-width :800px) {
    width: 150px;
  }
  @media (max-width :900px) {
    width: 300px;
  }
`;

const backgroundColors = {
  primary: "#1C76E2",
  warning: "#E10D30",
  default: "#155EC2",
  success: "#12AC3F",
};

const hoverBgColors = {
  primary: "#15447D",
  warning: "#900B21",
  default: "#0C3875",
  success: "#0B6F29",
};

export default Button;
