import exp from "constants";
import React from "react";
import sprite from "../../assets/img/sprite.svg"

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
  <svg width={props.width || "48"} height={props.height || "48"} viewBox={props.viewBox|| "0 0 48 48"} fill="none" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`${sprite}#${props.iconId}`} /> 
    </svg>
  )
}