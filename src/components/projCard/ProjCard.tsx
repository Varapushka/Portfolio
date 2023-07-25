import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { StyledButton } from '../Button';



type ProjCardPropsType = {
  src: string;
  title: string;
  text: string;
  link: string;
};

export const ProjCard = (props: ProjCardPropsType) => {
  return (
    <StyledCard>
      <ProjImg src={props.src} alt="project" />
      <FlexWrapper wrap="wrap">
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </FlexWrapper>
      <a href={props.link}>
        <StyledButton width='200px' height='60px'>Look it up</StyledButton>
      </a>
      {/* вместо кнопки динамическая ссылка кнопкой */}

    </StyledCard>
  );
};

const StyledCard = styled(FlexWrapper)`
  flex-direction: column;
  max-width: 550px;
  height: 700px;
  border: 1px solid rgba(163, 157, 157, 1);
  border-radius: 50px 0px 50px 0px;
  margin-bottom: 100px;
`;

const ProjImg = styled.img`
  width: 90%;
  height: 266px;
  padding: 25px;
`;

const Title = styled.h3`
  color: white;
`;

const Text = styled.p`
  color: white;
`;

