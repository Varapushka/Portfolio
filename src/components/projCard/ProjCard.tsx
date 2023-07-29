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
      <ProjImg src={props.src} alt="project image" />
      {/* <FlexWrapper wrap="wrap"> */}
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      {/* </FlexWrapper> */}
      <a href={props.link}>
        <StyledButton width='200px' height='60px'>Look it up</StyledButton>
      </a>


    </StyledCard>
  );
};

const StyledCard = styled(FlexWrapper)`
  flex-direction: column;
  max-width: 450px;
  max-height: 700px;
  border: 1px solid rgba(163, 157, 157, 1);
  border-radius: 50px 0px 50px 0px;
  margin-bottom: 100px;
  padding: 25px 25px 45px;
`;

const ProjImg = styled.img`
  height: 266px;
  margin-bottom: 25px;
  border-radius: 50px 8px 8px 8px;
`;

const Title = styled.h3`
position: relative;
font-size: 36px;
font-weight: 600;
margin: 0 auto;

::after {
  content: '';
  display: inline-block;
  position:absolute;
  left: -30px;
  right: -30px;
  bottom: -25px;
  height: 4px;
  background: linear-gradient(92deg, #8643dc 0%,  #00C0FD 100%);
}
`;

const Text = styled.p`
font-weight: 600;
font-size: 28px;
margin: 54px 0 25px;
`;

