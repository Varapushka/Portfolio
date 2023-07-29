import React from 'react';
import styled from 'styled-components';
import { Progress } from '../../../components/progress/Progress';
import { UlTech } from '../../../components/UiOfTech/UlOfTech';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';

const techItems = [
  'Git',
  'Quick learning',
  'Engagement',
  'B2 english',
  'Teamwork',
  'RWD'
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <StyledH2>Technologies</StyledH2>
        <FlexWrapper direction="column" align="center">
          <StyledTech>
            <Progress tech="React" value="2" level='Regular'/>
            <Progress tech="Html" value="3" level='Advansed'/>
            <Progress tech="JavaScript, TypeScript, JQuery" value="2" level='Regular'/>
            <Progress tech="UI design in Figma" value="1" level='Beginner' />
            <Progress tech="React Native" value="1" level='Beginner'/>
          </StyledTech>
          <StyledTitleAddSkills>Additional technologies and skills</StyledTitleAddSkills>
          <StyledAddTech>
            <UlTech UlItems={techItems} />
          </StyledAddTech>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
`;

const StyledTech = styled.div`
width: 100%`;

const StyledAddTech = styled.div`
width: 70%;
margin-bottom: 160px;
ul {
  display:flex;
  flex-wrap:wrap;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
  
  li {
    width:25%
  }
  li + li {
    gap: 300px;

  }
}

`;


const StyledH2 = styled.h2`

font-size: 64px;
font-weight: 600;


`
const StyledTitleAddSkills = styled.h2`
margin-top: 130px;
margin-bottom: 80px;
font-size: 48px;
font-weight: 600;


`
