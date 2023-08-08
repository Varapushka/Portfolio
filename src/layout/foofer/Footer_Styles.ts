import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  height: 200px;
  background-color: rgba(15, 22, 36, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`;

const FooterText = styled.p`
  font-size: 24px;
  font-weight: 600;
`;


export const S = {
  Footer,
  FooterText,
}