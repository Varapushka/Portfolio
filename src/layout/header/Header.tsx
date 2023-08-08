import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { SocialLinks } from '../../components/socialLinks/SocialLinks';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { BugerMenu } from './menu/burger/BurgerMenu';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Nav } from './menu/nav/Nav';
import { S } from './Header_Styles';

export const Header: React.FC = () => {
  const { width, height } = useWindowSize();
  console.log(width);
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          {width > 768 ? <Nav /> : <BugerMenu />}

          <SocialLinks />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
