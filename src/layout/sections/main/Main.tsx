import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/avatar.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { StyledButton } from '../../../components/Button';
import { Container } from '../../../components/Container';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap='wrap'>
          <MainTextbox>
            <MainTitle>Lorem ipsum dolor sit amet</MainTitle>

            <MainDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </MainDescription>

            <StyledButton>Let's begin</StyledButton>
          </MainTextbox>
          <PhotoFrame>
            <Photo src={photo} alt="avatar" />
          </PhotoFrame>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 70vh;
  display: flex;
`;

const MainTextbox = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 50%;
`;

const MainTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MainDescription = styled.p`
  color: #bcbcbc;
  font-size: 27px;
  font-weight: 600;
  margin: 27px 0 54px 0;
`;

const PhotoFrame = styled.div`
  position: relative;
  border-radius: 50px 0px 50px 0px;
  z-index: 2;

  ::before {
    content: '';
    position: absolute;
    border-radius: 50px 0px 50px 0px;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: 2px;
    background: linear-gradient(92deg, #8643dc 0%,  #00C0FD 100%);
    z-index: 1;
  }
`;

const Photo = styled.img`
position: relative;
z-index:3;
  width: 350px;
  height: 430px;
  border-radius: 50px 0px 50px 0px;
`;
