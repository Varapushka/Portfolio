import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Nav } from '../../components/nav/Nav';
import { SocialLinks } from '../../components/socialLinks/SocialLinks';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Nav />
          <SocialLinks />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 95px;
  background-color: rgba(15, 22, 36, 1);
  padding: 0 20px;
`;
