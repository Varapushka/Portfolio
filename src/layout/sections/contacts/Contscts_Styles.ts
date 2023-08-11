import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const ContactTitle = styled.h2`
position: relative;
  font-size: 2em;
  margin: 100px auto 90px;
  ::after {
  content: '';
  display: inline-block;
  position:absolute;
  left: -30px;
  right: -30px;
  bottom: -25px;
  height: 4px;
  background: linear-gradient(92deg, #8643dc 0%,  #00C0FD 100%);
  }
`;

const Contact = styled.section`
position: relative;

  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  align-items: center;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 540px;
  width: 100%;
  margin: 0 auto 90px;

  textarea {
    resize: none;
    height: 155px;
  }
`;

const Field = styled.input`
width: 100%;
background-color: ${theme.colors.primarybg};
border: 1px solid rgba(163, 157, 157, 1);
padding: 7px 15px;
color: ${theme.colors.font};
font-family: 'Poppins', sans-serif;
font-weight: 400;
&::placeholder{
  color: "#495057"
}

`;

export const S = {
  Contact,
  ContactTitle,
  ContactForm,
  Field

}