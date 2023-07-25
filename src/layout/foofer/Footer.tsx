import React from 'react';
import styled from 'styled-components';

import { SocialLinks } from '../../components/socialLinks/SocialLinks';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>Call me: +375-29-567-89-12</FooterText>
      <FooterText>Email: nifelim96@gmail.com</FooterText>
      <SocialLinks />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 325px;
  background-color: rgba(15, 22, 36, 1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FooterText = styled.p`
  color: white;
`;
