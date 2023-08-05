import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const UlTech = (props: { UlItems: Array<string> }) => {
  return (
    <nav>
      <ul>
        {props.UlItems.map((item: string, index: number) => {
          return <StyledLi key={index}>{item}</StyledLi>;
        })}
      </ul>
    </nav>
  );
};

const StyledLi = styled.li`
font-size: 2em;
font-weight: 600;
@media ${theme.media.tablet} {
    font-size: 1.1em;

  }
`;
