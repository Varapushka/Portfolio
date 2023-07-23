import React from "react";
import styled from "styled-components";



export const UlTech = (props: {UlItems: Array<string>}) => {
 return <nav>
  <StyledUl>
      {props.UlItems.map((item: string, index: number) => {
        return <StyledLi key={index}>
          {item}
        </StyledLi>
      })}
  </StyledUl>
 </nav>
}


const StyledLi = styled.li`
  color:rgba(255, 255, 255, 1);
`

const StyledUl = styled.ul`
  
`