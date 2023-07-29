import React from 'react';
import styled from 'styled-components';

import { SocialLinks } from '../../components/socialLinks/SocialLinks';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <FooterText>Call me:</FooterText>
        <FooterText> +375-29-567-89-12</FooterText>
      </div>
      <div>
      <FooterText>Email:</FooterText>
      <FooterText> nifelim96@gmail.com</FooterText>
      </div>
      <SocialLinks />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  height: 200px;
  background-color: rgba(15, 22, 36, 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
