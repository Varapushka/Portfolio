import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Nav } from '../../components/nav/Nav';
import { SocialLinks } from '../../components/socialLinks/SocialLinks';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
      <SocialLinks />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 135px;
  background-color: rgba(15, 22, 36, 1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
