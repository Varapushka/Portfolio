import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { theme } from '../../styles/Theme';
type ProgressPropsType = {
  tech: string;
  value: string;
  level: string;
};

export const Progress = (props: ProgressPropsType) => {
  return (
    <FlexWrapper>
      <FlexWrapper direction="column" width='90%'>
        <StyledLabel id={props.tech}>{props.tech}</StyledLabel>
        <StyledProgresss id={props.tech} max="4" value={props.value}></StyledProgresss>
      </FlexWrapper>
      <StyledSpan>{props.level}</StyledSpan>
    </FlexWrapper>
  );
};

const StyledLabel = styled.label`
margin-top: 55px;
font-size: 2.2em;
font-weight: 600;
@media ${theme.media.tablet} {
    font-size: 1.1em;

  }

`;

const StyledSpan = styled.span`
font-size: 1.5em;
font-weight: 600;
margin-top: 55px;
@media ${theme.media.tablet} {
    font-size: 0.7em;

  }

`

const StyledProgresss = styled.progress`
height: 32.3px;
border-radius: 300px;
width:100%;
background: #162950;

::-webkit-progress-bar {
  height: 32.3px;
border-radius: 300px;
width:100%;
background: #162950;
}

::-webkit-progress-value {
  border-radius: 83px;
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
}

::-moz-progress-bar {
  height: 32.3px;
border-radius: 300px;
width:100%;
background: #162950;
}
`