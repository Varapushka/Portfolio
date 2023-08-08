import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
`;

const Tech = styled.div`
width: 100%
`;

const AddTech = styled.div`
width: 70%;
margin-bottom: 160px;
ul {
  display:flex;
  flex-wrap:wrap;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
  
  li {
    width: 33%;

  }

}

`;


const H2 = styled.h2`

font-size: 4em;
font-weight: 600;
@media ${theme.media.tablet} {
    font-size: 2em;

  }

`
const TitleAddSkills = styled.h2`
margin-top: 130px;
margin-bottom: 80px;
font-size: 3em;
font-weight: 600;

@media ${theme.media.tablet} {
    font-size: 1.7em;

  }

`
const Label = styled.label`
margin-top: 55px;
font-size: 2.2em;
font-weight: 600;
@media ${theme.media.tablet} {
    font-size: 1.1em;

  }

`;

const Span = styled.span`
font-size: 1.5em;
font-weight: 600;
margin-top: 55px;
@media ${theme.media.tablet} {
    font-size: 0.7em;

  }

`

const Progresss = styled.progress`
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

export const S = {
  Skills,
  Tech,
  AddTech,
  H2,
  TitleAddSkills,
  Label,
  Span,
  Progresss,
}