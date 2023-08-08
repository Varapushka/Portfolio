import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { StyledButton } from '../Button';
import { theme } from '../../styles/Theme';
import { S } from '../../layout/sections/projects/Projects_Styles'



type ProjCardPropsType = {
  src: string;
  title: string;
  text: string;
  link: string;
};

export const ProjCard = (props: ProjCardPropsType) => {
  return (
    <S.Card>
      <S.ProjImg src={props.src} alt="project image" />
      {/* <FlexWrapper wrap="wrap"> */}
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
      {/* </FlexWrapper> */}
      <a href={props.link}>
        <StyledButton width='200px' height='60px'>Look it up</StyledButton>
      </a>


    </S.Card>
  );
};

