import PersonalDetails from "./PersonalDetails"
import styled from "styled-components";

const Card = styled.div`
margin: 2rem;
border: 1px solid black;
box-shadow: 0 0 4px rgba(0 0 0.5 0.7);
width: 50vw;
`;
const FormWrapper = styled.div`
background-color: rgb(240, 238, 235);
width: 50vw;
`;


const Form = () => {
return (
    <>
    <Card>
    <FormWrapper>
    <PersonalDetails />
    </FormWrapper>
    </Card>
    </>
)
}

export default Form