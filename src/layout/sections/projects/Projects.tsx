import React from "react";
import { ProjCard } from "../../../components/projCard/ProjCard";
import projPhoto from "../../../assets/img/image-1.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from 'styled-components';

 export const Projects = () => {
    return <StyledProjects>
      <StyledH2>Projects</StyledH2>
      <CardBox>
        <ProjCard src={projPhoto} title="Project 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <ProjCard src={projPhoto} title="Project 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <ProjCard src={projPhoto} title="Project 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        <ProjCard src={projPhoto} title="Project 4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </CardBox>
    </StyledProjects>
}


const CardBox = styled(FlexWrapper)`
flex-wrap: wrap;
max-width: 1320px;
justify-content: space-around;

`
const StyledProjects = styled.section`
min-height: 100vh;
background-color:rgba(15, 22, 36, 1);
`

const StyledH2 = styled.h2`
color: white;
`