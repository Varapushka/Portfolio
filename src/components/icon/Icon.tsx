import React from "react";
import sprite from "../../assets/img/sprite.svg"
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
  <StyledSvg width={props.width || "48"} height={props.height || "48"} viewBox={props.viewBox|| "0 0 48 48"} fill="none" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`${sprite}#${props.iconId}`} /> 
    </StyledSvg>
  )
}


const StyledSvg = styled.svg`
z-index: 1;
  
  :hover {
    stroke:  rgba(19, 173, 199, 1);
  }
`