import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import photo from '../../../assets/img/avatar.webp';
import { StyledButton } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <S.Main id = {'home'}>
      <Container>
        <S.MainWrap>
          <S.MainTextbox>
            <S.MainHello>Hello, I'm</S.MainHello>

            <S.MainTitle>Sergei Voropaev</S.MainTitle>
            <S.H1>A Web Developer, A Frontend Developer</S.H1>
            <S.MainDescription>
              A Web Developer, A Frontend Developer
            </S.MainDescription>

            <StyledButton
              width={width < 768 ? '200px' : '280px'}
              height={height < 768 ? '60px' : '80px'}
            >
              Let's begin
            </StyledButton>
          </S.MainTextbox>
          <Tilt>
            <S.PhotoFrame>
              <S.Photo src={photo} alt="avatar" />
            </S.PhotoFrame>
          </Tilt>
        </S.MainWrap>
      </Container>
    </S.Main>
  );
};
