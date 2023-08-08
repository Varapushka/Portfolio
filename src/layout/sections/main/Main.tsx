import React from 'react';
import photo from '../../../assets/img/avatar.webp';
import { StyledButton } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { S } from './Main_Styles';

export const Main = () => {
  const { width, height } = useWindowSize();

  return (
    <S.Main>
      <Container>
        <S.MainWrap>
          <S.MainTextbox>
            <S.MainHello>Hello, I'm</S.MainHello>

            <S.MainTitle>Sergei Voropaev</S.MainTitle>
            <S.MainDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </S.MainDescription>

            <StyledButton
              width={width < 768 ? '200px' : '280px'}
              height={height < 768 ? '60px' : '80px'}
            >
              Let's begin
            </StyledButton>
          </S.MainTextbox>
          <S.PhotoFrame>
            <S.Photo src={photo} alt="avatar" />
          </S.PhotoFrame>
        </S.MainWrap>
      </Container>
    </S.Main>
  );
};

