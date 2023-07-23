import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
type ProgressPropsType = {
  tech: string;
  value: string;
};

export const Progress = (props: ProgressPropsType) => {
  return (
    <FlexWrapper>
      <FlexWrapper direction="column">
        <StyledLabel id={props.tech}>{props.tech}</StyledLabel>
        <progress id={props.tech} max="4" value={props.value}></progress>
      </FlexWrapper>
      <StyledSpan>level</StyledSpan>
    </FlexWrapper>
  );
};

const StyledLabel = styled.label`
  color: white;
`;

const StyledSpan = styled.span`
  color: white;

`