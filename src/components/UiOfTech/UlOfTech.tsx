import React from 'react';
import styled from 'styled-components';

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
font-size: 36px;
font-weight: 600;
`;
