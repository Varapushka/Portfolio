import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/avatar.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={'space-around'} align={'center'}>
        <MainTextbox>
          <MainTitle>Lorem ipsum dolor sit amet</MainTitle>

          <MainDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MainDescription>

          <StyledButton>Let's begin</StyledButton>
        </MainTextbox>
        <Photo src={photo} alt="avatar" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: rgba(15, 22, 36, 1);
`;

const MainTextbox = styled(FlexWrapper)`
  flex-direction: column;
  align-items: left;
`;

const MainTitle = styled.h3`
  color: white;
`;

const MainDescription = styled.p`
  color: white;
`;

const StyledButton = styled.button`
  width: 280px;
  height: 80px;
  border: none;
  background-color: rgba(19, 173, 199, 1);
  border-radius: 50px;
  color: white;
  font-size: 1.5rem;
`;

const Photo = styled.img`
  width: 520px;
  height: 600px;
`;
