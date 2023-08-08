import React from 'react';
import { FlexWrapper } from '../FlexWrapper';
import { S } from '../../layout/sections/skills/Skills_Styles';
type ProgressPropsType = {
  tech: string;
  value: string;
  level: string;
};

export const Progress = (props: ProgressPropsType) => {
  return (
    <FlexWrapper>
      <FlexWrapper direction="column" width='90%'>
        <S.Label id={props.tech}>{props.tech}</S.Label>
        <S.Progresss id={props.tech} max="4" value={props.value}></S.Progresss>
      </FlexWrapper>
      <S.Span>{props.level}</S.Span>
    </FlexWrapper>
  );
};

